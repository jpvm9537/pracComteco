import React, { useState } from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    
    const [nombre, setNombre] = useState("home");

    return(<div className="stylesNavBar">
        <h2 className="stylesH2">Laboratorio Comteco</h2>
        <div>
            <NavLink 
                className={({ isActive }) => (isActive ? 'stylesActive' : 'stylesA')} 
                to="/">Home</NavLink>
            <NavLink 
                className={({ isActive }) => (isActive ? 'stylesActive' : 'stylesA')}
                to="/routes">Routers</NavLink>
            <NavLink 
                className={({ isActive }) => (isActive ? 'stylesActive' : 'stylesA')}
                to="/equipos">Equipos</NavLink>
            <NavLink 
                className={({ isActive }) => (isActive ? 'stylesActive' : 'stylesA')}
                to="/personal">Personal</NavLink>
        </div>
    </div>
    );
}