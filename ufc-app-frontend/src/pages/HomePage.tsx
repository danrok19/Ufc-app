import { useLoaderData } from "react-router-dom"
import type { RankingResult } from "../api/types/rankingResult"
import { homeQuery } from "../api/queries/homeQuery"
import { useEffect, useState } from "react"
import { RiMedalLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import RowFighter from "../components/RowFighter";
import type { NewsResult } from "../api/types/newsResult";


interface ClassWeightNav {
    key: string,
    value: string
}

type LoaderData = {
    homeData: RankingResult[]
    newsData: NewsResult[]
}


export default function HomePage() {
    //const data: RankingResult[] = useLoaderData()
    const { homeData, newsData } = useLoaderData() as LoaderData
    const [data, setData] = useState<RankingResult[]>(homeData)
    const [dataNews] = useState<NewsResult[] | null>(newsData)
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

    const content = Object.values(contenders).map((fighter: string, index: number) => {
        if (index + 1 <= countDisplay) {
            return <RowFighter key={fighter} fighter={fighter} index={index} />
        }
        else {
            return null;
        }
    })

    const classes: ClassWeightNav[] = [{ key: "1", value: "Flyweight" }, { key: "2", value: "Lightweight" }, { key: "3", value: "Welterweight" }, { key: "4", value: "Middleweight" }, { key: "5", value: "Heavyweight" }]

    const weightClassButtons = classes.map(c => {
        return <button
            key={c.key}
            className="bg-yellow-300 shadow-lg shadow-black-300/50 rounded px-3 py-1 
                transition duration-300 ease-in-out hover:ring-2 hover:ring-black hover:scale-103 hover:shadow-none cursor-pointer"
            onClick={() => handleClassChange(c.value)}>
            {c.value}
        </button>
    })

    let newsContent;
    if (dataNews) {
        newsContent = Object.values(dataNews).map((news: NewsResult) => {
            return <div key={news.id}
                className="group relative mx-8 p-3 bg-linear-to-r from-yellow-300 to-black inset-shadow-sm rounded
                            transition duration-700 ease-in-out hover:from-black hover:text-white cursor-pointer
                            hover:scale-103 hover:inset-shadow-white/50 overflow-hidden
                            my-5">
                <p className="font-bold text-xl mb-3">{news.title}</p>
                <p className="text-white line-clamp-3 group-hover:mb-9">{news.content}</p>
                    <button className="absolute right-3 group-hover:bottom-3
                    rounded-full bg-black 
                    px-2 py-1 cursor-pointer mt-2 text-black
                    transition-transform duration-600 ease-in-out
                    group-hover:left-1/2
                    group-hover:-translate-x-1/2
                    group-hover:bg-yellow-300">See more</button>
            </div>
        })
    }

    console.log(data)
    return <div className="flex">
        <div className="flex-1">
            <p className="my-5 mx-15 text-5xl font-bold">Featured News</p>
            {newsContent}
        </div>
        <div className="flex-1">
            <div className="flex gap-3 justify-center my-8">
                {weightClassButtons}
            </div>
            <div className="flex justify-center text-5xl mt-8">
                {weight_class}
            </div>
            <div className="flex justify-center gap-3 text-2xl my-5">
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                    <RiMedalLine className="text-yellow-500" />
                    <p className="text-4xl">{champion}</p>
                </div>
                <div className='flex border p-5 rounded'>
                    <BsFillPersonFill className='text-3xl' />
                </div>
            </div>
            <div className="flex flex-col justify-center m-auto w-80">
                <p className="text-4xl border-b text-center mb-2">Contenders</p>
                {content}
                {countDisplay == 5 ? <div className="flex justify-center">
                    <button
                        className="text-4xl transition duration-200 ease-in-out hover:scale-110 cursor-pointer"
                        onClick={handleMoreDisplay}>
                        <CiSquareMore />
                    </button>
                </div> : <div className="flex justify-center">
                    <button
                        className="text-4xl transition duration-200 ease-in-out hover:scale-110 cursor-pointer"
                        onClick={handleLessDisplay}>
                        <IoIosArrowUp />
                    </button>
                </div>}
            </div>
        </div>
    </div>
}