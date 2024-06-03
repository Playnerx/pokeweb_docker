import React, { useState } from 'react';
import iconLeftArrow from '../components/assets/img/chevron-left-solid.png';
import { useAuth } from './AuthProvider';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import LoadingPage from './utilities/Loadings/LoadingPage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function CambiaEmail() {

    const { handleSubmit, register } = useForm({ mode: "all" });
    const { userData, fetcher, setLogout } = useAuth();
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    const onSubmit = (dataEmail) => {
        fetcher(`${BACKEND_URL}/users/${userData.user.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${userData.token}`,
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(dataEmail),
        })
        .then((response) => response.json())
        .then((data) => {
            setLogout();
            if (!data.errors) {
            } else {
                Object.keys(data.errors).forEach(field => {
                    if (data.errors[field]) {
                        setError(field, {
                            types: getErrorTypes(data.errors[field])
                        });
                    }
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
        {loading && <LoadingPage />}
            <div className="relative w-full h-[180px] flex justify-center items-center wallpaper3 bg-center bg-cover animation-user">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-white text-center font-semibold relative">
                    <p className="px-15 mb-4 text-[30px] md:text-[40px] mb-5 customFont">Cambia la tua Email</p>
                </div>
            </div>

            <div className="w-full flex justify-center animation2">
                <div className='w-full md:w-[1000px] mx-auto h-[500px]'>

                    <div className="bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] border-b-[2px] w-[100%] md:w-[800px] h-[250px] rounded-[12px] mb-8 mx-auto flex justify-center items-center mt-[90px]"> {/* Aggiunto mt-20 per il margine superiore */}
                        <div className='inputFieldChange text-center'>
                            <p className='text-[20px] sm:text-[30px] font-semibold mb-4'>
                                Inserisci la tua nuova Email.
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("email", { required: 'Il campo password è obbligatorio.'})} type="email" name='email' className='text-black border border-gray-300 rounded-lg px-4 py-2 max-w-md focus:outline-none focus:border-orange-500 focus:border-[2px]' />
                                <button className="block buttonSite font-bold py-2 px-4 rounded mt-4 mx-auto mt-5">Invia</button>
                            </form>
                        </div>
                    </div>

                    <div className='relative buttonActions w-[180px] rounded flex justify-center items-center mt-10 mx-auto'>
                    <NavLink to="/" className='block ml-4 px-3 py-2 text-white text-[16px] font-semibold'>Torna alla Home</NavLink>
                        <img className='absolute left-0 w-[12px] ml-4' src={iconLeftArrow} alt="Icon Random" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CambiaEmail;