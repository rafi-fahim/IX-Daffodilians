import React from 'react'
import { Rubik_Vinyl } from 'next/font/google'

const rubikVinly = Rubik_Vinyl({ weight:"400" , subsets:['cyrillic'] });

const LandingArea = () => {
    const divStyles = {
        backgroundImage: `linear-gradient(to bottom, #18181859, #181818a6), url('https://firebasestorage.googleapis.com/v0/b/daffodilians-9.appspot.com/o/assets%2FImages%2Flanding_Background_image.jpg?alt=media&token=3447cdc9-7c12-4346-afbb-69504ab1b0b1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
  return (
    <div style={divStyles} className=" w-full text-white h-[95vh] gap-4 flex items-center justify-center flex-col">
        <h1  className="max-sm:text-4xl text-7xl  font-medium uppercase font-jersey">IX-DAFFODILIANS</h1>
        <p>Most engasing class IX batch of 2024</p>
        <div className='flex bg-no-repeat gap-7 items-center justify-center'>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Website</p>
        </div>
    </div>
  )
}

export default LandingArea