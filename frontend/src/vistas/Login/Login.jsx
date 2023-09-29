import React from "react";
import './Login.css'
import { useState } from "react";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";

export const Login = () => {
    const [login, setLogin] = useState();

    function handleClick (){
        console.log("presionaste boton cancelar");
    }

    return (
        <div className='stylesLoginContainer'>
            <Formik
                initialValues={{
                    user: '',
                    pass: ''       
                }}

                onSubmit={ (valores) => {
                    console.log(valores);
                }}

            >
                {({values, handleSubmit, handleChange, handleBlur, resetForm}) => (
                    <form onSubmit={handleSubmit}>
                    <h2 className="stylesH2Login"> Iniciar Cesion</h2>
                    <div>
                        <input 
                            className='stylesInput'
                            type='text'
                            id='user'
                            name='user'
                            placeholder='escribe tu nomnre de usuario'
                            value={values.user}
                            onChange={handleChange}
                        />
                        <input 
                            className='stylesInput'
                            type='password'
                            id='pass'
                            name='pass'
                            placeholder='escribe tu Contraseña'
                            value={values.pass}
                            onChange={handleChange}
                        />
                    </div>                   
                    <div className="stylesContenedorButton">
                        <button  className='stylesButoon' type="submit">
                            Iniciar Secion
                        </button>
                    </div>
                    <div className="styleLinks">
                        <NavLink to="/personal" className="styleLinksA">Crear cuenta</NavLink>
                        <a className="styleLinksA">Olvide mi Contraseña</a>
                    </div>
                </form>
                )}
            </Formik>
            
        </div>
    );
}