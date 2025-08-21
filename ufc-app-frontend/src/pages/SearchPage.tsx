import { useLoaderData, Link } from "react-router-dom"
import type { SearchResult } from "../api/types/searchResult"
import { BsFillPersonFill } from "react-icons/bs";
import { FaRankingStar } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";

export default function SearchPage(){

    const data = useLoaderData()
    console.log(data)

    const content = data.map((fighter: SearchResult) => {
        return <div key={fighter.first_name + fighter.last_name + fighter?.nickname} className="border flex mx-10 rounded py-2 my-5 bg-yellow-400 transition duration-200 ease-in-out hover:scale-101">
                <div className="flex-1 flex flex-col justify-content items-center border-r hover: cursor-pointer">
                    <div className="text-5xl">
                        <BsFillPersonFill />
                    </div>
                    {fighter.first_name} {fighter.last_name}
                </div>
                <div className="flex-1 flex flex-col justify-content items-center border-r">
                    <div>
                        {fighter.nickname}
                    </div>
                    <div className="flex-1 flex justify-center items-center gap-2">
                        <FaRankingStar className="text-black text-2xl"/>
                        {fighter.wins} - {fighter.draws} - {fighter.losses}
                </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Link to={`/details?first_name=${fighter.last_name}&last_name=${fighter.first_name}`}
                    className="bg-[#191919] text-white rounded px-3 py-2 flex justify-center items-center gap-2 transition duration-200 ease-in-out hover:bg-gray-200 hover:text-black hover:cursor-pointer"
                    >
                        View Details
                        <CgDetailsMore />
                    </Link>
                </div>
            </div>
    })

    return <div className="bg-[#191919] min-h-screen">
        Search Page: {content}
    </div>
}