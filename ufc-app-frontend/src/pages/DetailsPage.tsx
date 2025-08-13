import { useLoaderData } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import Chart from '../components/Chart';

export default function DetailsPage(){

    const data = useLoaderData()
    console.log(data)
    return <div className='flex bg-[#191919] min-h-screen text-white'>
            <div className='mx-20 my-10 border w-full p-5'>
                <div className='flex'>
                    <div className=' flex-1'>
                        <div className='border w-fit p-5 rounded'>
                            <BsFillPersonFill className='text-9xl'/>
                        </div>
                        <div className='flex my-2 text-3xl'>
                            {data.first_name} "{data.nickname}" {data.last_name}
                        </div>
                    </div>
                    <div className='flex flex-1 gap-4 border'>
                        <div>
                            <p>Weight Class</p>
                            {data.weight_class}
                        </div>
                        <div>
                            <p>Score</p>
                            {data.wins} - {data.draws} - {data.losses}
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