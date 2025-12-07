import { useCallback, useState } from "react"
export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [role, setRole] = useState("");
    const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>(null);

    const login = useCallback((token: string) => {
        setToken(token);

        const payloadBase64 = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));

        const usernameClaim =
            decodedPayload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

        const userIdClaim =
            decodedPayload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

        const roleClaim =
            decodedPayload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

        setUsername(usernameClaim || "");
        setUserId(userIdClaim || "");
        setRole(roleClaim || "");
        setIsAuthenticated(true)

        if (decodedPayload.exp) {
            const expirationDate = new Date(decodedPayload.exp * 1000);
            setTokenExpirationDate(expirationDate);
        }


    }, []);

    const logout = useCallback(() => {
        return ;

    }, []);
    return { isAuthenticated, token, username, userId, role, tokenExpirationDate, login, logout };
}