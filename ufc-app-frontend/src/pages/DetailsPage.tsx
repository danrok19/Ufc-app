import { useLoaderData } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import Chart from '../components/Chart';
import { PiMedalFill } from "react-icons/pi";
import { useAuth } from '../hooks/auth-hook';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function DetailsPage() {

    const data = useLoaderData();
    const auth = useAuth();
    const [isFollowed, setIsFollowed] = useState<boolean>(false);

    useEffect(() => {
        const checkFollowStatus = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5077/api/User/isfollowing",
                    {
                    params: {
                        userId: auth.userId,
                        fighterName: data.first_name + " " + data.last_name
                    }
                }
                );
                setIsFollowed(response.data)
            } catch (err) {
                console.log("error: ", err)
            }
        }
        checkFollowStatus();
    }, [auth.userId, data.first_name, data.last_name])

    const onSubmit = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5077/api/User/follow",
                {
                    userId: auth.userId,
                    fighterName: data.first_name + " " + data.last_name
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            const result = response.data;
            console.log("result: ", result)

        } catch (err) {
            console.log("Error: ", err)
        }
    }

    const onSubmitUnFollow = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5077/api/User/unfollow",
                {
                    userId: auth.userId,
                    fighterName: data.first_name + " " + data.last_name
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            const result = response.data;
            setIsFollowed(response.data);
            console.log("result: ", result)

        } catch (err) {
            console.log("Error: ", err)
        }
    }


    console.log(data)
    return <div className='flex bg-[#f1f1f1] text-white min-w-xl'>
        <div className='mx-auto my-20 border w-2/3 p-5 text-black'>
            <div className='flex-col flex lg:flex-row whitespace-nowrap'>
                <div className=' flex-1'>
                    <div className='flex'>
                        <div className='border w-fit p-5 rounded'>
                            <BsFillPersonFill className='text-9xl' />
                        </div>
                        <div className='flex flex-col pl-5'>
                            <p>Height: <span className='text-2xl'>{data.height}</span></p>
                            <p>Weight: <span className='text-2xl'>{data.weight}</span></p>
                            <p>Reach: <span className='text-2xl'>{data.reach}</span></p>
                            <div>
                                {isFollowed ? 
                                    <button
                                    className='border cursor-pointer p-1 rounded mt-2 w-4/5  hover:bg-black hover:text-white transition duration-300 ease-in-out'
                                    onClick={onSubmitUnFollow}>Unfollow</button> :
                                    <button
                                    className='border cursor-pointer p-1 rounded mt-2 w-4/5  hover:bg-black hover:text-white transition duration-300 ease-in-out'
                                    onClick={onSubmit}>Follow</button>}
                            </div>
                        </div>
                    </div>
                    <div className='flex my-2 text-3xl'>
                        {data.first_name} "{data.nickname}" {data.last_name}
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex w-full gap-1'>
                        <div className='flex-1 bg-gradient-to-r from-yellow-500 via-[#191919] to-[#191919] \
                            h-fit py-3 rounded shadow-lg shadow-yellow-500 text-white'>
                            <p className='flex justify-center text-3xl font-semibold'>Weight Class</p>
                            <span className='flex justify-center'>{data.weight_class}</span>
                        </div>
                        <div className='flex-1 bg-gradient-to-r to-yellow-500 via-[#191919] from-[#191919] 
                            h-fit py-3 rounded shadow-lg shadow-yellow-500 text-white'>
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
                {data.StrAcc ? <Chart statName={"StrAcc"} statValue={data.StrAcc} chartColor="red" /> : <></>}
                {data.StrDef ? <Chart statName={"StrDef"} statValue={data.StrDef} chartColor="green" /> : <></>}
                {data.TDAcc ? <Chart statName={"TDAcc"} statValue={data.TDAcc} chartColor="red" /> : <></>}
                {data.TDDef ? <Chart statName={"TDDef"} statValue={data.TDDef} chartColor="green" /> : <></>}
            </div>
        </div>
    </div>
}