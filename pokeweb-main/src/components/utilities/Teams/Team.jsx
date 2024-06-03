import { NavLink } from "react-router-dom";
import MiniCard from "../Cards/MiniCard";

export default function Team() {
    return (
        <div className='homeTeam'>
            <div className='teamContainer mb-4'>
                <NavLink to="/teams">
                    <div className='relative lg:max-w-[1000px] sm:max-w-[800px] w-full h-[300px] background bg-cover shadow-[0_5px_10px_rgba(0,0,0,.25)] sm:rounded-[20px] mx-auto'>
                    <div className="absolute inset-0 bg-black opacity-50 sm:rounded-[20px]"></div>
                            {/* <p className='text-[20px] font-semibold mb-4 text-center'>Nome Team</p> */}
                            <div className="flex justify-center items-center h-[280px]">
                                <p className="text-[30px] text-white font-semibold customFont relative">Coming Soon...</p>
                            </div>
                            {/* <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:px-10 lg:px-10'>
                                {Array(6).fill(null).map((el, index) => (
                                    <div className="w-full sm:w-auto" key={index}>
                                        <MiniCard></MiniCard>
                                    </div>
                                ))}
                            </div> */}
                    </div>
                   </NavLink>
            </div>
        </div>
    );
}