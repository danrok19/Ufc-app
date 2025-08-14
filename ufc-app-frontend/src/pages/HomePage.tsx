import { useLoaderData } from "react-router-dom"
import type { RankingResult } from "../api/types/rankingResult"

export default function HomePage(){
    const data: RankingResult[] = useLoaderData()

    const { champion, weight_class, contenders } = data[0]

    const content = Object.values(contenders).map((fighter: string) =>{
        return <div key={fighter}>
            {fighter}
        </div>
    })

    console.log(data)
    return <div>
        Home Page
        {champion}
        {weight_class}
        {content}
    </div>
}