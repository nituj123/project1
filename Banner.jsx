import React, { useState, useEffect } from 'react'
import textimg from './../img/textimg.png';
import text2img from './../img/text2img.png';
import Play from './../img/Play.png';
import bannerimg from './../img/bannerimg.png';
import Search1 from './../img/Search.png';
import { Search } from 'lucide-react';
import firstimg1 from './../img/firstimg1.png';
import secondimg2 from './../img/secondimg2.png';
import thirdimg3 from './../img/thirdimg3.png';
import fourimg4 from './../img/fourimg4.png';
import fiveimg5 from './../img/fiveimg5.png';
import card from './../img/Card.png';
import emoji from './../img/emoji.png';
import smile from './../img/smile.png';
import group from './../img/group.png';

const images = [
    secondimg2,
    thirdimg3,
    fourimg4,
    fiveimg5,
    firstimg1
];


function Banner() {
    
    return (
        <>
            <div className='container flex mx-auto h-screen'>
                <div class="mt-28 item-center text-start">
                    <div className='text-2xl text-[#FF9401] font-bold'>__Restaurant    </div>
                    <div className='flex text-6xl mx-auto mt-14 font-bold h-6 items-end'>Good F<img src={textimg} alt="img not found" className='h-10' /><img src={textimg} alt="img not found" className='h-10' />d</div>
                    <div className='flex text-6xl mx-auto mt-12 font-bold h-6 items-end'>Good M <img src={text2img} alt="img not found" className='h-10' />  <img src={text2img} alt="img not found" className='h-10' />   d</div>
                    <div className='text-2xl font-bold mt-8'>The food palace is an neighborhood restaurent <br></br>serving seasonal global cuisine driven by the faire.</div>
                    <div className='flex mt-6'><input type="text" placeholder='&nbsp; &nbsp;Search food' className=' w-[70%] rounded-full mt-2 border-2  relative border-black h-11 ' /><img src={Search1} alt="img not found" className='h-10 absolute top-[50%] left-[530px] mt-2' /></div>
                    <div className='flex gap-4 mt-8'>
                        {/* <AiOutlineSearch/> */}


                        <div className=' text-white text-lg '><button className='bg-[#FF9401] p-2 rounded-full w-48'>Explore Food Menu</button></div>
                        <div className=' text-white text-lg '><button className='bg-[#FF9401] p-2 rounded-full w-48'>Order online</button></div>
                    </div>
                    <div className='mt-4 '>

                        <div className='flex  h-12'>
                            <div>
                                <img src={Play} alt="img not found" className=' h-12' />
                            </div>
                            <div className='text-center'>
                                Watch Video
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* <div className="image-container">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`image-${index}`}
                                className='imgbox absolute top-[45%] h-[25%]  food-circle' 
                                style={{
                                    position: 'absolute',
                                    left: `${50 + 40 * Math.cos((angle + index * 72) * (Math.PI / 180))}%`, // Adjust these values according to your needs
                                    top: `${50 + 40 * Math.sin((angle + index * 72) * (Math.PI / 180))}%`, // Adjust these values according to your needs
                                }}
                            />
                        ))}
                    </div> */}
                   
                    <div className='mt-2 h-[70%]'>
                        <img src={bannerimg} alt="img not found" className=' h-full' />
                    </div>
                    <div className='mt-2'>
                        <img src={secondimg2} alt="img not found" className='imgbox absolute top-[45%] h-[25%]  food-circle' />
                    </div>
                    <div className='mt-2'>
                        <img src={thirdimg3} alt="img not found" className='  top-[25%] absolute left-[73%] h-[50%] food-circle' />
                    </div>
                    <div className='mt-2'>
                        <img src={fourimg4} alt="img not found" className='absolute top-[55%] h-48 left-[70%] food-circle' />
                    </div>
                    <div className='mt-2'>
                        <img src={fiveimg5} alt="img not found" className=' absolute top-[10%] left-[90%] h-48' />
                    </div>
                    <div className='mt-2'>
                        <img src={firstimg1} alt="img not found" className=' absolute top-[60%] h-48 left-[35%]' />
                    </div>
                    <div className='mt-2'>
                        <img src={card} alt="img not found" className='absolute top-[20%] h-[20%] right-[75%] ' />
                    </div>


                    <div className='mt-2'>
                        <img src={smile} alt="img not found" className=' absolute top-[20%] left-[55%]' />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Banner
