import React from 'react'
import iconPlus from '../../assets/img/circle-plus-solid.png'

export default function EmptyTeam() {
  return (
    <div className='homeTeam'>
            <div className='teamContainer mb-16'>
                <a href='#'>
                    <div className='max-w-[600px] bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[20px] mx-auto'>
                        <div className='p-5'>
                            <p className='text-[20px] font-semibold mb-4'>Hai uno slot libero, crea il tuo team!</p>
                            <div className='bg-[black] w-[100%] h-[50px] mx-auto flex justify-center items-center '>
                                <img className='w-[40px]' src={iconPlus} alt="Icon Plus" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
  )
}
