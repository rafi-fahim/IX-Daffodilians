import Image from 'next/image';
import React from 'react'
type MemberData = {
    name: string;
    id: number;
    isLeader: boolean;
    profilePhoto: string;
}
const GroupStudentCard:React.FC<MemberData> = ({ id, isLeader, name, profilePhoto}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Image alt={name} src={profilePhoto} width={70} height={70} className={`rounded-full ${isLeader && "p-2 bg-theme-color-2 h-[100px] w-[100px]"}`}/>
        {isLeader && (<h1 className='font-semibold text-xl uppercase'>
            Leader
        </h1>)}
        <p className='text-center text-sm'>{name}</p>
    </div>
  )
}

export default GroupStudentCard