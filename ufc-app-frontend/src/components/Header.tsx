import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { VscSearch } from 'react-icons/vsc';
import { AuthContext } from "../context/auth-context";
import { IoPersonOutline } from "react-icons/io5";

export default function Header() {

    const [term, setTerm] = useState("")
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(term)
        navigate(`/search?term=${term}`)
        setTerm('')
    }

    return <div className="border-b-2 shadow-xl/40 shadow-yellow-300/50 border-yellow-500 flex items-center justify-between bg-black">
        <Link to="/" className="text-4xl font-semibold mx-5 my-2 text-white italic transition duration-300 ease-in-out 
               hover:text-yellow-600 hover:scale-95">UFC APP</Link>
        <div className="flex border items-center">
            <form onSubmit={handleSubmit}>
                <div className="border-2 border-white rounded-md py-1 mx-5 flex justify-center items-center">
                    <div className="mx-2 text-white">
                        <VscSearch />
                    </div>
                    <input className="text-white placeholder-gray outline-none"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Find whatcha want" />
                </div>
            </form>
            <div>
                {auth.isAuthenticated ? <div className="text-white text-2xl mr-5 cursor-pointer hover:scale-110">
                        <IoPersonOutline />
                    </div> : <Link to="/login" className="text-white mx-2 border-1 border-white rounded-md px-1 flex justify-center items-center">Log in</Link>}
            </div>
        </div>
    </div>
}