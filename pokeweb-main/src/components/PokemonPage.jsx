import { NavLink, useParams } from 'react-router-dom';
import iconLeftArrow from './assets/img/chevron-left-solid.png';
import iconTop from '../components/assets/img/chevron-up-solid.png';
import Card from './utilities/Cards/Card';
import StatsBar from './utilities/StatsBar';
import { useEffect, useState } from 'react';
import LoadingPage from './utilities/Loadings/LoadingPage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function PokemonPage() {

    const { id } = useParams();

    const [pkmnInfo, setpkmnInfo] = useState([]);
    const [count, setCount] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    useEffect(() => {
        if (count < 1) {
            fetch(`http://localhost:8000/api/pokemon/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Request Error');
                    }
                    return response.json();
                })
                .then(data => {
                    setpkmnInfo(data);
                    setCount(prev => prev + 1)
                    console.log(data);
                })
                .catch(error => {
                    console.log('Si è verificato un errore:', error);
                });
        }
    }, [count, id]);

    const getTypeColor = (type) => {
        switch (type) {
            case "Normale":
                return "bg-[#A8A77A]";
            case "Fuoco":
                return "bg-[#EE8130]";
            case "Acqua":
                return "bg-[#6390F0]";
            case "Elettro":
                return "bg-[#f7bd2c]";
            case "Erba":
                return "bg-[#7AC74C]";
            case "Ghiaccio":
                return "bg-[#96D9D6]";
            case "Lotta":
                return "bg-[#C22E28]";
            case "Veleno":
                return "bg-[#A33EA1]";
            case "Terra":
                return "bg-[#E2BF65]";
            case "Volante":
                return "bg-[#A98FF3]";
            case "Psico":
                return "bg-[#F95587]";
            case "Coleottero":
                return "bg-[#A6B91A]";
            case "Roccia":
                return "bg-[#B6A136]";
            case "Spettro":
                return "bg-[#735797]";
            case "Drago":
                return "bg-[#6F35FC]";
            case "Buio":
                return "bg-[#705746]";
            case "Acciaio":
                return "bg-[#B7B7CE]";
            case "Folletto":
                return "bg-[#D685AD]";

            default:
                return "bg-none";
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    let urlInit = 'http://localhost:8000/';

    return (
        <>

            {loading && <LoadingPage />}
            <div className='w-full flex justify-center'>
                <div className='w-[100%] sm:w-[800px] h-[100%] mx-auto text-center'>

                    <div className='relative buttonActions w-[180px] rounded flex justify-center items-center mb-5 mt-10 ms-[20px] md:ms-0 animation-user'>
                        <NavLink to="/pokedex" className='block ml-4 px-3 py-2 text-white text-[16px] font-semibold'>Torna indietro</NavLink>
                        <img className='absolute left-0 w-[12px] ml-4' src={iconLeftArrow} alt="Icon Random" />
                    </div>


                    <p className='text-[50px] my-1 font-bold capitalize customFont2 mb-6 animation'>{pkmnInfo.nome}</p>
                    <div className='flex justify-between mb-[1px] animation3'>
                        <p className='text-[14px] sm:text-[18px] text-[#DE9912] font-semibold ms-8 customFont'>Pokédex n°{pkmnInfo.specie_id}</p>
                        <p className='text-[14px] sm:text-[18px] text-[#DE9912] font-semibold me-8 customFont'>Gen. {pkmnInfo.generazione}</p>
                    </div>


                    {/* CARD POKEMON */}

                    <div className='w-full md:w-[800px] mx-auto mb-8 animation2'>
                        <div className='bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] border-b-[2px] mx-auto w-full h-[350px] md:rounded-t-[40px] flex justify-center items-center'>
                            <div className=''>
                                <img className="mx-auto w-[320px] pixelated" src={`${urlInit}${pkmnInfo.immagine}`} alt="Pokemon" />
                            </div>
                        </div>
                        <div className='w-full h-[120px] bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] md:rounded-b-[40px] flex justify-center items-center flex-col'>
                            <p className='text-center text-[14px] sm:text-[16px] px-4 sm:px-28 font-semibold'>{pkmnInfo.descrizione}</p>
                        </div>
                    </div>

                    {/* TIPO */}

                    <p className='text-center mb-2 text-[23px] font-semibold customFont animation'>Tipo</p>
                    <div className='w-full py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] md:rounded-[12px] mb-8 animation'>
                        <div className="flex justify-center">
                            <div className={`${getTypeColor(pkmnInfo.tipo1)} rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2`}>
                                <p className='text-center text-white font-semibold'>{pkmnInfo.tipo1}</p>
                            </div>
                            <div className={`${getTypeColor(pkmnInfo.tipo2)} rounded-[4px] w-[90px] h-7 flex justify-center items-center`}>
                                <p className='text-center text-white font-semibold'>{pkmnInfo.tipo2}</p>
                            </div>
                        </div>
                    </div>

                    {/* ABILITA */}

                    <p className='text-center mb-2 text-[23px] font-semibold customFont animation'>Abilità</p>
                    <div className='w-full py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] md:rounded-[12px] mb-8 animation'>
                        <div className='flex flex-col pr-5 sm:pr-20'>
                            <p className='text-center mb-0 text-[16px] sm:text-[18px] font-semibold'>Abilità base</p>
                            <p className='text-center text-[14px] sm:text-[16px]'>{pkmnInfo.abilita_base}</p>
                        </div>
                        <div className='flex flex-col pl-5 sm:pl-20'>
                            <p className='text-center mb-0 text-[16px] sm:text-[18px] font-semibold'>Abilità nascosta</p>
                            <p className='text-center text-[14px] sm:text-[16px]'>{pkmnInfo.abilita_nascosta}</p>
                        </div>
                    </div>

                    {/* DATI */}

                    <p className='text-center mb-2 text-[23px] font-semibold customFont animation'>Dati</p>
                    <div className='w-full py-4 mx-auto bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] md:rounded-[12px] mb-8 animation'>
                        <div className='flex justify-center mb-6'>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[16px] sm:text-[18px] font-semibold'>Altezza</p>
                                <p className='text-center text-[14px] sm:text-[16px]'>{pkmnInfo.altezza} m</p>
                            </div>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[16px] sm:text-[18px] font-semibold'>Peso</p>
                                <p className='text-center text-[14px] sm:text-[16px]'>{pkmnInfo.peso} kg</p>
                            </div>
                        </div>

                        <div className='flex justify-center mb-4'>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[16px] sm:text-[18px] font-semibold'>Categoria</p>
                                <p className='text-center text-[14px] sm:text-[16px]'>Pokémon {pkmnInfo.categoria}</p>
                            </div>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[16px] sm:text-[18px] font-semibold'>Gruppo Uova</p>
                                <p className='text-center text-[14px] sm:text-[16px]'>{pkmnInfo.gruppo_uova1}<br></br>{pkmnInfo.gruppo_uova2}</p>
                            </div>
                        </div>

                    </div>

                    {/* DEBOLEZZE */}


                    <p className='text-center mb-2 text-[23px] font-semibold customFont animation'>Debolezze</p>
                    <div className='w-full py-2 mx-auto flex flex-wrap justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] md:rounded-[12px] mb-8 animation'>
                        {pkmnInfo.debolezza1 &&
                            <div className={`${getTypeColor(pkmnInfo.debolezza1)} text-white font-semibold rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2 mx-2 mb-2 md:mb-0`}>
                                <p className=''>{pkmnInfo.debolezza1}</p>
                            </div>
                        }
                        {pkmnInfo.debolezza2 &&
                            <div className={`${getTypeColor(pkmnInfo.debolezza2)} text-white font-semibold rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2 mx-2 mb-2 md:mb-0`}>
                                <p className=''>{pkmnInfo.debolezza2}</p>
                            </div>
                        }
                        {pkmnInfo.debolezza3 &&
                            <div className={`${getTypeColor(pkmnInfo.debolezza3)} text-white font-semibold rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2 mx-2 mb-2 md:mb-0`}>
                                <p className=''>{pkmnInfo.debolezza3}</p>
                            </div>
                        }
                        {pkmnInfo.debolezza4 &&
                            <div className={`${getTypeColor(pkmnInfo.debolezza4)} text-white font-semibold rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2 mx-2 mb-2 md:mb-0`}>
                                <p className=''>{pkmnInfo.debolezza4}</p>
                            </div>
                        }
                        {pkmnInfo.debolezza5 &&
                            <div className={`${getTypeColor(pkmnInfo.debolezza5)} text-white font-semibold rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2 mx-2 mb-2 md:mb-0`}>
                                <p className=''>{pkmnInfo.debolezza5}</p>
                            </div>
                        }
                        {pkmnInfo.debolezza6 &&
                            <div className={`${getTypeColor(pkmnInfo.debolezza6)} text-white font-semibold rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2 mx-2 mb-2 md:mb-0`}>
                                <p className=''>{pkmnInfo.debolezza6}</p>
                            </div>
                        }
                        {pkmnInfo.debolezza7 &&
                            <div className={`${getTypeColor(pkmnInfo.debolezza7)} text-white font-semibold rounded-[4px] w-[90px] h-7 flex justify-center items-center me-2 mx-2 mb-2 md:mb-0`}>
                                <p className=''>{pkmnInfo.debolezza7}</p>
                            </div>
                        }
                    </div>

                    {/* STATISTICHE */}

                    <p className='text-center mb-2 text-[23px] font-semibold customFont animation'>Statistiche</p>
                    <div className='w-full py-2 mx-auto items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] md:rounded-[12px] mb-8 animation'>
                        <div className='my-3 px-5 sm:px-20 flex'>
                            <div className='bg-[#0CEB72] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>PS</p>
                            </div>
                            <StatsBar
                                bgcolor="#0CEB72"
                                progress={pkmnInfo.hpstat}
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-5 sm:px-20 flex'>
                            <div className='bg-[#EF8E35] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Attacco</p>
                            </div>
                            <StatsBar
                                bgcolor="#EF8E35"
                                progress={pkmnInfo.atkstat}
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-5 sm:px-20 flex'>
                            <div className='bg-[#ED7954] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Difesa</p>
                            </div>
                            <StatsBar
                                bgcolor="#ED7954"
                                progress={pkmnInfo.defstat}
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-5 sm:px-20 flex'>
                            <div className='bg-[#1AC1CC] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Att. Sp.</p>
                            </div>
                            <StatsBar
                                bgcolor="#1AC1CC"
                                progress={pkmnInfo.spatkstat}
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-5 sm:px-20 flex'>
                            <div className='bg-[#658FCE] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Dif. Sp.</p>
                            </div>
                            <StatsBar
                                bgcolor="#658FCE"
                                progress={pkmnInfo.spdefstat}
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-5 sm:px-20 flex'>
                            <div className='bg-[#D46CE5] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Velocità</p>
                            </div>
                            <StatsBar
                                bgcolor="#D46CE5"
                                progress={pkmnInfo.spdstat}
                                height={30}
                            />
                        </div>
                    </div>

                    {/* Scroll to Top Button */}
                    {scrollY > 100 && (
                        <button
                            onClick={scrollToTop}
                            className="buttonSite2 w-[50px] fixed bottom-5 right-8 text-white font-bold py-2 px-3 rounded-[10px] shadow hidden md:block"
                        >
                            <img className='w-[30px]' src={iconTop} alt="Bottom Icon" />
                        </button>
                    )}

                    {/* LINEA EVOLUTIVA */}

                    {/* <div className='w-100 pb-10 mx-auto bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-10'>
                        <p className='py-5 text-[30px] font-semibold'>Linea Evolutiva</p>

                        <div className='flex justify-between px-20'>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div> */}


                </div>
            </div>
        </>
    );
}