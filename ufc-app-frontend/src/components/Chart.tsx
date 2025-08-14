const colorClasses: Record<string, string> = {
  red: "bg-red-500",
  green: "bg-green-500"
};

export default function Chart({statName, statValue, chartColor} : {statName: string, statValue: string, chartColor: string}) {
    return <div>
        {statName}
        <div className='border py-1 pl-1 flex h-8'>
            <div className={`${colorClasses[chartColor]} h-full flex justify-center items-center`}
                style={{ width: statValue! }} >
            </div>
            <div className='flex items-center px-2'>
                {statValue}
            </div>
        </div>
    </div>
}