import { useLoaderData } from "react-router-dom"
import type { RankingResult } from "../api/types/rankingResult"
import { homeQuery } from "../api/queries/homeQuery"
import { useEffect, useState } from "react"
import { RiMedalLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";


interface ClassWeightNav{
    key: string, 
    value: string
}

export default function HomePage(){
    //const data: RankingResult[] = useLoaderData()
    const [data, setData] = useState<RankingResult[]>(useLoaderData())
    const [selectedClass, setSelectedClass] = useState("Lightweight")
    const [countDisplay, setCountDisplay] = useState(5)

    const handleClassChange = (value: string) => {
        setSelectedClass(value)
    }

    const handleMoreDisplay = () => {
        setCountDisplay(15)
    }

    const handleLessDisplay = () => {
        setCountDisplay(5)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: RankingResult[] = await homeQuery(selectedClass);
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [selectedClass])

    const { champion, weight_class, contenders } = data![0]

    const content = Object.values(contenders).map((fighter: string, index: number) =>{
        if (index + 1 <= countDisplay) {
            return <div
                key={fighter}
                className="border text-black mx-5 my-1 rounded p-1 bg-gray-200 cursor-pointer transition duration-200 hover:scale-110">
                {index + 1}. {fighter}
            </div>
        }
        else {
            return null;
        }
    })

    const classes: ClassWeightNav[] = [{key: "1", value: "Flyweight"}, {key: "2", value: "Lightweight"}, {key: "3", value: "Welterweight"}, {key: "4", value: "Middleweight"}, {key: "5", value: "Heavyweight"}]

    const weightClassButtons = classes.map(c => {
        return <button 
                key={c.key} 
                className="bg-yellow-300 shadow-lg shadow-yellow-300/50 rounded px-3 py-1 
                transition duration-300 ease-in-out hover:ring-2 hover:ring-black hover:scale-103 hover:shadow-none cursor-pointer"
                onClick={() => handleClassChange(c.value)}>
                {c.value}
            </button>
    })

    console.log(data)
    return <div>
        <div className="flex gap-3 justify-center my-8">
            {weightClassButtons}
        </div>
        <div className="flex justify-center text-white text-5xl mt-8">
            {weight_class}
        </div>
        <div className="flex justify-center gap-3 text-white text-2xl my-5">
            <div className="flex justify-center items-center gap-2 cursor-pointer">
                <RiMedalLine className="text-yellow-500" />
                <p className="text-4xl">{champion}</p>
            </div>
            <div className='flex border p-5 rounded'>
                <BsFillPersonFill className='text-3xl' />
            </div>
        </div>
        <div className="flex flex-col justify-center m-auto w-80">
            <p className="text-white text-4xl border-b text-center mb-2">Contenders</p>
            {content}
            {countDisplay == 5 ? <div className="flex justify-center">
                <button
                    className="text-white text-4xl transition duration-200 ease-in-out hover:scale-110 cursor-pointer"
                    onClick={handleMoreDisplay}>
                    <CiSquareMore />
                </button>
            </div> : <div className="flex justify-center">
                <button
                    className="text-white text-4xl transition duration-200 ease-in-out hover:scale-110 cursor-pointer"
                    onClick={handleLessDisplay}>
                    <IoIosArrowUp />
                </button>
            </div>}
        </div>
    </div>
}