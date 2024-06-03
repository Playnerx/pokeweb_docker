import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import pokeIcon from "./assets/img/pokeball.bafce1b0.jpg";
import eyeIcon from "./assets/img/eye-white.png";
import eyeSlashIcon from "./assets/img/eye-slash-white.png";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Nuovo stato per la visualizzazione della conferma della password
    const { fetcher, setAsLogged } = useAuth();
    const [successRegister, setSuccessRegister] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({ mode: "all" });

    const getErrorTypes = (errors) => {
        const types = {};
        errors.forEach((error, i) => {
            types[`apiError${i + 1}`] = error;
        });
        console.log(types);
        return types;
    };

    const onSubmit = (formData) => {
        fetcher(`${BACKEND_URL}/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (!data.errors) {
                    setSuccessRegister(true);
                    setTimeout(() => {
                        navigate("/login");
                    }, 5000);
                } else {
                    Object.keys(data.errors).forEach((field) => {
                        if (data.errors[field]) {
                            setError(field, { type: 'custom', message: data.errors[field] });
                        }
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen registerBackground">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="wrapperRegister">
                    {successRegister ? (
                        <>
                            <img
                                className="w-[70px] mx-auto mb-5"
                                src={pokeIcon}
                                alt="icon Pokemon"
                            />
                            <h2 className="text-[22px] font-semibold text-[greenyellow] underline underline-offset-[5px]">
                                Registrazione effettuata con successo!
                            </h2>
                            <p className="text-white text-[20px] font-semibold mt-[30px]">
                                Verrai reindirizzato alla pagina di Log in...
                            </p>
                            <p className="text-white text-[16px] login font-semibold mt-[5px]">
                                Se riscontri problemi con il redirect,{" "}
                                <Link to="/login">clicca qui</Link>.
                            </p>
                        </>
                    ) : (
                        <form
                            className="formRegister"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <h2 className="text-[35px] font-semibold text-white">
                                Registrati
                            </h2>
                            <div className="inputField">
                                <input
                                    type="text"
                                    required
                                    {...register("username", {
                                        required:
                                            'Il campo "nickname" è obbligatorio.',
                                    })}
                                />
                                <label>Inserisci il tuo nickname</label>
                            </div>
                            <div className="inputField">
                                <input
                                    type="email"
                                    required
                                    {...register("email", {
                                        required:
                                            'Il campo "email" è obbligatorio.',
                                    })}
                                />
                                <label>Inserisci la tua email</label>
                            </div>
                            <div className="inputField">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    {...register("password", {
                                        required:
                                            'Il campo "password" è obbligatorio.',
                                    })}
                                />
                                <label>Inserisci la tua password</label>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                >
                                    <img
                                        className="w-[25px]"
                                        src={
                                            showPassword
                                                ? eyeSlashIcon
                                                : eyeIcon
                                        }
                                        alt={
                                            showPassword
                                                ? "Nascondi password"
                                                : "Mostra password"
                                        }
                                    />
                                </button>
                            </div>
                            <div className="inputField">
                                <input
                                    type={showConfirmPassword ? "text" : "password"} // Utilizza lo stato separato per la conferma della password
                                    required
                                    {...register("password_confirmation", {
                                        required:
                                            'Il campo "conferma password" è obbligatorio.',
                                    })}
                                />
                                <label>Conferma la tua password</label>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword) // Usa la funzione di toggle per la conferma della password
                                    }
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                >
                                    <img
                                        className="w-[25px]"
                                        src={
                                            showConfirmPassword
                                                ? eyeSlashIcon
                                                : eyeIcon
                                        }
                                        alt={
                                            showConfirmPassword
                                                ? "Nascondi password"
                                                : "Mostra password"
                                        }
                                    />
                                </button>
                            </div>
                            {/* Error display */}
                            <div className="mt-3">
                                {Object.values(errors).map((error, index) => (
                                    <div
                                        key={index}
                                        className="bg-red-500/10 rounded-xl p-4 mb-3"
                                    >
                                        <p className="text-sm text-red-600 dark:text-red-500">
                                            {error.message}
                                            
                                        </p>
                                    </div>
                                ))}
                            </div>
                            {/* End error display */}
                            <button className="buttonLogin mt-6" type="submit">
                                Registrati
                            </button>
                            <div className="login mt-[30px] font-semibold">
                                <p>
                                    Hai già un account?{" "}
                                    <NavLink to="/login">Fai il Log In</NavLink>!
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}