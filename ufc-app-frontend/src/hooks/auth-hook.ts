import { useCallback, useEffect, useState } from "react"

let logoutTimer: number = 0;

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>(null);

    const login = useCallback((token: string) => {
        setToken(token);

        if (token) {
            const payloadBase64 = token.split('.')[1];
            const decodedPayload = JSON.parse(atob(payloadBase64));

            const usernameClaim =
                decodedPayload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

            const userIdClaim =
                decodedPayload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

            const roleClaim =
                decodedPayload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            setUsername(usernameClaim);
            setUserId(userIdClaim);
            setRole(roleClaim);
            setIsAuthenticated(true)

            if (decodedPayload.exp) {
                const expirationDate = new Date(decodedPayload.exp * 1000);
                setTokenExpirationDate(expirationDate);

                localStorage.setItem(
                    'authData',
                    JSON.stringify({
                        username: usernameClaim,
                        userId: userIdClaim,
                        role: roleClaim,
                        isAuthenticated: true,
                        token: token,
                        expiration: expirationDate
                    })
                );
            }
        }
    }, []);

    const logout = useCallback(() => {
        setUsername("");
        setUserId("");
        setRole("");
        setIsAuthenticated(false);
        setTokenExpirationDate(null);
        setToken("");
        localStorage.removeItem('authData');
    }, []);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);

        } else {
            clearTimeout(logoutTimer)
        }
    }, [token, logout, tokenExpirationDate, isAuthenticated])

    useEffect(() => {
        const storedAuthData = JSON.parse(localStorage.getItem('authData') || '{}');
        if (storedAuthData && storedAuthData.token && new Date(storedAuthData.expiration) > new Date()) {
            login(storedAuthData.token)
        }
    }, [login, token])


    return { isAuthenticated, token, username, userId, role, tokenExpirationDate, login, logout };
}