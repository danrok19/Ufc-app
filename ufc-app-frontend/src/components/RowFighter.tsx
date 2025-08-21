import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RowFighter({fighter, index}:{fighter: string, index: number}) {

    const navigate = useNavigate()
    const [first_name, last_name] = fighter.split(" ")
    const handleClick = () => {
        navigate(`details?first_name=${first_name}&last_name=${last_name}`)
    }

    return (
        <div
            onClick={handleClick}
            className=" flex border text-black mx-5 my-1 rounded p-1 bg-gray-200 cursor-pointer transition duration-200 hover:scale-110">
            <span className='w-20 px-2 flex items-center'>
                #<p className='font-semibold'>{index + 1}</p>
            </span> <p className='w-80 text-right font-bold'>{fighter}</p>
        </div>
    )
}
