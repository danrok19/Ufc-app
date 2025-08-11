import { useLoaderData } from "react-router-dom"
import type { SearchResult } from "../api/types/searchResult"
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSquare } from "react-icons/io";

export default function SearchPage(){

    const data = useLoaderData()
    console.log(data)

    const content = data.map((fighter: SearchResult) => {
        return <div key={fighter.entity.id} className="border flex mx-5 rounded py-2 my-3">
                <div className="flex-1 flex flex-col justify-content items-center">
                    <div className="text-5xl">
                        <BsFillPersonFill />
                    </div>
                    {fighter.entity.name}, {fighter.entity.gender}
                </div>
                <div className="flex-1 flex-col">
                    <div>
                        {fighter.entity.country.alpha2}, {fighter.entity.country.name}
                    </div>
                    <div className="flex mx-auto">
                        <IoMdSquare />
                        <IoMdSquare />
                        <IoMdSquare />
                    </div>
                </div>
                <div>
                    {fighter.score}
                </div>
            </div>
    })

    return <>
        Search Page: {content}
    </>
}