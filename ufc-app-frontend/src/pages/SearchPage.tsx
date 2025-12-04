import { useLoaderData, Link } from "react-router-dom"
import type { SearchResult } from "../api/types/searchResult"
import { BsFillPersonFill } from "react-icons/bs";
import { FaRankingStar } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";

export default function SearchPage(){

    const data = useLoaderData()
    console.log(data)

    const content = data.map((fighter: SearchResult) => {
        return <div key={fighter.first_name + fighter.last_name + fighter?.nickname} 
        className="flex mx-10 rounded py-4 my-5 bg-yellow-400 transition duration-200 ease-in-out hover:scale-101
        md:flex-row flex-col hover:shadow-md shadow-yellow-600 sm:mx-30 ">
                <div className="flex-1 flex flex-col justify-content items-center hover: cursor-pointer border-b sm:border-0 mx-5 sm:mx-30">
                    <div className="text-5xl">
                        <BsFillPersonFill />
                    </div>
                    {fighter.first_name} {fighter.last_name}
                </div>
                <div className="flex-1 flex flex-col justify-content items-center sm:border-r sm:border-l border-0 border-[#f1f1f1]">
                    <div>
                        {fighter.nickname}
                    </div>
                    <div className="flex-1 flex justify-center items-center gap-2">
                        <FaRankingStar className="text-black text-2xl"/>
                        {fighter.wins} - {fighter.draws} - {fighter.losses}
                </div>
                </div>
                <div className="flex-1 flex justify-center items-center border-t sm:border-0 mx-5 sm:mx-30 sm:mx-0 py-5 sm:py-0 py-5">
                    <Link to={`/details?first_name=${fighter.first_name}&last_name=${fighter.last_name}`}
                    className="bg-[#191919] text-white rounded px-3 py-2 flex justify-center items-center gap-2 transition duration-200 ease-in-out hover:bg-gray-200 hover:text-black hover:cursor-pointer"
                    >
                        View Details
                        <CgDetailsMore />
                    </Link>
                </div>
            </div>
    })

    return <div className="mt-10">
        {content}
    </div>
}