import { useLoaderData } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import Chart from '../components/Chart';
import { PiMedalFill } from "react-icons/pi";

export default function DetailsPage(){

    const data = useLoaderData()
    console.log(data)
    return <div className='flex bg-[#191919] text-white'>
            <div className='mx-20 my-10 border w-full p-5'>
                <div className='flex'>
                    <div className=' flex-1'>
                        <div className='flex'>
                            <div className='border w-fit p-5 rounded'>
                                <BsFillPersonFill className='text-9xl'/>
                            </div>
                            <div className='flex flex-col pl-5'>
                                <p>Height: <span className='text-2xl'>{data.height}</span></p>
                                <p>Weight: <span className='text-2xl'>{data.weight}</span></p>
                                <p>Reach: <span className='text-2xl'>{data.reach}</span></p>
                            </div>
                        </div>
                        <div className='flex my-2 text-3xl'>
                            {data.first_name} "{data.nickname}" {data.last_name}
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex w-full'>
                            <div className='flex-1 bg-gradient-to-r from-yellow-500 via-[#191919] to-[#191919] h-fit py-3 rounded border-r'>
                                <p className='flex justify-center text-3xl font-semibold'>Weight Class</p>
                                <span className='flex justify-center'>{data.weight_class}</span>
                            </div>
                            <div className='flex-1 bg-gradient-to-r to-yellow-500 via-[#191919] from-[#191919] h-fit py-3 rounded'>
                                <p className='flex justify-center text-3xl font-semibold'>Score</p>
                                <span className='flex justify-center'>{data.wins} - {data.draws} - {data.losses}</span>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center gap-2 text-3xl pt-5'>
                            <PiMedalFill />
                            <p>{data.belt}</p>
                        </div>                                 
                    </div>
                </div>
                <div>
                    Stats
                    {data.StrAcc ? <Chart statName={"StrAcc"} statValue={data.StrAcc} chartColor="red"/> : <></>}
                    {data.StrDef ? <Chart statName={"StrDef"} statValue={data.StrDef} chartColor="green"/> : <></>}
                    {data.TDAcc ? <Chart statName={"TDAcc"} statValue={data.TDAcc} chartColor="red"/> : <></>}
                    {data.TDDef ? <Chart statName={"TDDef"} statValue={data.TDDef} chartColor="green"/> : <></>}
                </div>
            </div>
        </div>
}