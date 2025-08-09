import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { VscSearch } from 'react-icons/vsc';

export default function Header(){

    const [term, setTerm] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log(term)
        navigate("/search")
        setTerm('')
    }

    return <div className="border-b-5 border-yellow-500 flex items-center justify-between bg-black">
        <Link to="/" className="text-4xl font-semibold mx-5 my-2 text-white italic">UFC APP</Link>
        <form onSubmit={handleSubmit}>
            <div className="border-2 border-white rounded-md py-1 mx-5 flex justify-center items-center">
                <div className="mx-2 text-white">
                    <VscSearch />
                </div>
                <input className="text-white placeholder-gray"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Find whatcha want"/>
            </div>
        </form>
    </div>
}