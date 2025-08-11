import { useLoaderData } from "react-router-dom"
import type { SearchResult } from "../api/types/searchResult"
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSquare } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";

export default function SearchPage(){

    const data = useLoaderData()
    console.log(data)

    const content = data.map((fighter: SearchResult) => {
        return <div key={fighter.entity.id} className="border flex mx-10 rounded py-2 my-5 bg-yellow-400 transition duration-200 ease-in-out hover:scale-102">
                <div className="flex-1 flex flex-col justify-content items-center border-r hover: cursor-pointer">
                    <div className="text-5xl">
                        <BsFillPersonFill />
                    </div>
                    {fighter.entity.name}, {fighter.entity.gender}
                </div>
                <div className="flex-1 flex flex-col justify-content items-center border-r">
                    <div>
                        {fighter.entity.country.alpha2}, {fighter.entity.country.name}
                    </div>
                    <div className="flex gap-2">
                        <IoMdSquare color={fighter.entity.teamColors.primary} className="border rounded border-black text-3xl"/>
                        <IoMdSquare color={fighter.entity.teamColors.secondary} className="border rounded border-black text-3xl"/>
                        <IoMdSquare color={fighter.entity.teamColors.text} className="border rounded border-black text-3xl"/>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center gap-2">
                    <FaRankingStar className="text-black text-2xl"/>
                    {fighter.score}
                </div>
            </div>
    })

    return <>
        Search Page: {content}
    </>
}