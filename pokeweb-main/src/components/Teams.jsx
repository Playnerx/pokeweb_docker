import React from 'react';
import iconCoding from '../components/assets/img/terminal-solid.png';

export default function TeamPage() {
  return (
    <>
      {/* <div className='w-full flex justify-center'>
        <div className='w-[1000px] h-[100%] mx-auto'>

          <div className='relative buttonActions w-[180px] rounded flex justify-center items-center mt-10 mb-5'>
            <a href='#' className='block ml-4 px-3 py-2 text-white text-[16px] font-semibold'>Torna indietro</a>
            <img className='absolute left-0 w-[12px] ml-4' src={iconLeftArrow} alt="Icon Random" />
          </div>

          <p className='text-center mb-4 text-[40px] font-semibold'>Nome Team</p>
          <div className='w-100 py-8 mx-auto bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
              {Array(6).fill(null).map((el, index) => (
                <div className="w-full px-2 mb-3" key={index}>
                  <Card></Card>
                </div>
              ))}
            </div>
            <p className='mt-8 font-semibold text-[18px] text-center'>Privo di idee? Prova con un Team randomizzato!</p>
            <div className='relative buttonActions w-[220px] mx-auto rounded flex items-center mt-5'>
              <a href='#' className='block px-3 py-2 text-white text-[16px] font-semibold'>Generatore casuale</a>
              <img className='w-[28px] absolute right-0 mr-3' src={iconRandom} alt="Icon Random" />
            </div>
          </div>

          <p className='text-center mb-4 text-[23px] font-semibold'>Debolezze</p>
          <div className='w-100 py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
            <p className='px-8'>Elettro Erba</p>
          </div>

          <p className='text-center mb-4 text-[23px] font-semibold'>Superefficacità</p>
          <div className='w-100 py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
            <p className='px-8'>Fuoco Roccia Terra</p>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center h-[700px] animation">
        <img src={iconCoding} alt="Coding Icon" className='w-[45px] mr-5' />
        <h1 className="text-[40px] font-bold text-[black] customFont">Coming Soon...</h1>
      </div>
    </>
  );
}