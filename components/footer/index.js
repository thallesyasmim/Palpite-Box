import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4 shadow-md w-full">
            <div className="container mx-auto text-center font-bold text-white">
                <h1>Projeto desenvolvido por Thalles Gabriel
                / <a href="" target="_blank" className="hover:underline">Facebook</a>
                 / <a href="http://github.com/thallesyasmim" target="_blank" className="hover:underline">Github</a></h1>
            </div>
            <div className="mt-4 flex justify-center">
                 <img className="p-4 w-40" src="/logo_semana_fsm.png" alt="FullStack Master" />
                 <img className="p-4 w-40" src="/logo_devpleno.png" alt="devPleno" />
            </div>
        </div>   
    )
}

export default Footer;