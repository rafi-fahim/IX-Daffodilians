import Image from 'next/image'
import React from 'react'
type userData = {
    name: string;
    roll: number;
    id: string;
    profilePhoto: string;
    coverPhoto: string;
    boy: boolean;
    captain?: boolean;
  };

const ProfileCard:React.FC<userData> = (props) => {
  return (
    <div className='w-[90%] p-4 bg-theme-color-1 text-white flex flex-col items-center justify-start'>
        <div className="w-full bg-gray-300 h-24 rounded-t-md self-start relative">
          <Image
            className="absolute -bottom-14 bg-theme-color-2 left-[60px] rounded-full p-2"
            alt={props.profilePhoto}
            src={props.profilePhoto}
            height={105}
            width={105}
          />
        </div>
        <h3 className="text-lg text-center font-bold mt-10">{props.name}</h3>
        <div className="flex flex-col justify-center items-start gap-2 w-full p-2">
          <p>Roll: {props.roll}</p>
          <p>ID: {props.id}</p>
        </div>
    </div>
  )
}

export default ProfileCard