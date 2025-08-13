import { useLoaderData } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";

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
                    <div>
                        StrAcc
                        <div className='border py-1 pl-1'>
                            <div className="bg-red-500 h-5 flex justify-center items-center"
                            style={{ width: data.StrAcc }} >
                                {data.StrAcc}
                            </div>
                        </div>
                    </div>
                    <div>
                        StrDef
                        <div className='border py-1 pl-1'>
                            <div className="bg-green-500 h-5 flex justify-center items-center"
                            style={{ width: data.StrDef }} >
                                {data.StrDef}
                            </div>
                        </div>
                    </div>
                    <div>
                        TDAcc
                        <div className='border py-1 pl-1'>
                            <div className="bg-red-500 h-5 flex justify-center items-center"
                            style={{ width: data.TDAcc }} >
                                {data.TDAcc}
                            </div>
                        </div>
                    </div>
                    <div>
                        TDDef
                        <div className='border py-1 pl-1'>
                            <div className="bg-green-500 h-5 flex justify-center items-center"
                            style={{ width: data.TDDef }} >
                                {data.TDDef}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}