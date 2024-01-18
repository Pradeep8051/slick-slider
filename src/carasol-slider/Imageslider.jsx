import React, { useEffect, useState } from 'react'

const data = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasAiw_YYeOp7-PJpj0hIYaoL1Wgzjb29Fw5GfzTVzVOQYZxSaeMaIfu7ylI9oCAMacBc&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqRiFw4DkYgYUW42qU4eCx1cDxs_eHzWscA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2kUEyX5fincjQOR53VEWG2bPC1iI1Kd4KQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTCBhCKmnPsGZ3T4ncvZjbG5Umi9fGOweIg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlHbSVkVtctrwhTBQIdUQlQnReM8pSHhrKA&usqp=CAU']


function Imageslider() {
  const [currentimageIndex, setCurrentimageIndex] = useState(0)

  const handleNextImage = () => {
    setCurrentimageIndex((currentimageIndex + 1) % data.length)
    console.log(currentimageIndex);
  }

  const handlePrevImage = () => {
    setCurrentimageIndex(!currentimageIndex ? data.length - 1 : currentimageIndex - 1)
  }
  useEffect(() => {
    setTimeout(() => {
      handleNextImage();
    }, 4000)
  }, [currentimageIndex])
  return (
    <div className='flex justify-center'>
      <button className='font-bold p-4 m-8' onClick={handlePrevImage}>Prev Button</button>
      {data.map((url, i) => (
        <img key={url} src={url} alt="wallpaper" className={`w-[500px] h-[300px] object-contain ${currentimageIndex === i ? 'block' : 'hidden'}`} />
      ))}
      <button className='font-bold p-4 m-8' onClick={handleNextImage}>Next Button</button>
    </div>
  )
}

export default Imageslider