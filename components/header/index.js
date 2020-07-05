import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <React.Fragment>
            <div className="bg-gray-700 p-4 shadow-md">
                <div className="container mx-auto">
                    <Link href="/">           
                        <a><img className="mx-auto w-40" src="/logo_paplpitebox.png" alt="PalpiteBox" /></a>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-700 p-4 shadow-md text-center">
                 <Link href="/about">
                    <a className="px-4 hover:underline font-bold text-white">Sobre</a>
                </Link>
                <Link href="/contato">
                    <a  className="px-4 hover:underline font-bold text-white" >Contato</a>
                </Link>
             </div>   
        </React.Fragment>
    )
}

export default Header;