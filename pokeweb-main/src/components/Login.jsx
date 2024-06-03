import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useForm } from "react-hook-form";
import eyeIcon from '../components/assets/img/eye-slash-white.png';
import eyeSlashIcon from '../components/assets/img/eye-white.png';
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function Login() {

    const { fetcher, setAsLogged } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm({ mode: "all" });

    const onSubmit = (formData) => {
        fetcher(`${BACKEND_URL}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status !== 401) {
                    setAsLogged(data.user, data["access_token"])
                } else {
                    setError('login', { type: 'custom', message: data.message })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen loginBackground">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="wrapperLogin">
                    <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-[35px] font-semibold text-white mb-6">Login</h2>
                        <div className="inputField relative">
                            <input type="email" required {...register("email", { required: 'Il campo "email" è obbligatorio.' })} />
                            <label>Inserisci la tua email</label>
                        </div>
                        <div className="inputField relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                {...register("password", { required: 'Il campo "password" è obbligatorio.' })}
                            />
                            <label>Inserisci la tua password</label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            >
                                <img className='w-[25px]'
                                    src={showPassword ? eyeSlashIcon : eyeIcon}
                                    alt={showPassword ? "Nascondi password" : "Mostra password"}
                                />
                            </button>
                        </div>

                        {/* Error display */}
                        <div className="mt-3">
                            {errors.email && (
                                <div className="bg-red-500/10 rounded-xl p-4 mb-3">
                                    <p className="text-sm text-red-600 dark:text-red-500">
                                        {errors.email.message}
                                    </p>
                                </div>
                            )}
                            {errors.password && (
                                <div className="bg-red-500/10 rounded-xl p-4 mb-3">
                                    <p className="text-sm text-red-600 dark:text-red-500">
                                        {errors.password.message}
                                    </p>
                                </div>
                            )}
                            {errors.login && (
                                <div className="bg-red-500/10 rounded-xl p-4 mb-3">
                                    <p className="text-sm text-red-600 dark:text-red-500">
                                        {errors.login.message}
                                    </p>
                                </div>
                            )}
                        </div>
                        {/* End error display */}

                        <button className="buttonLogin mt-3" type="submit">Log In</button>
                        <div className="register font-semibold">
                            <p>
                                Non hai un account? <NavLink to="/register">Registrati</NavLink>!
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}