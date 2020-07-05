import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';
import useSwr from 'swr';

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Index = () => {

    const { data, error } = useSwr('/api/getpromo', fetcher)

    return (
        <div className="mt-12 text-center">
            <PageTitle title='Home' />
            <p className="font-bold text-gray-900">Nós sempre procuramos por atender melhor nossos clientes.<br />
                Por isso , estamos sempre abertos para ouvir sua opinião.</p>
            <div className="text-center my-12">
                <Link href="/pesquisa">
                    <a className="rounded-lg shadow-lg font-bold px-6 py-4 bg-gray-800 text-white hover:shadow">Dar opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p className="text-center font-bold text-gray-900 my-12">Carregando...</p>}
            {!error && data && data.showCoupon &&
                <p className="text-center font-bold text-gray-900 my-12">
                    {data.message}
                </p>
            }
        </div>
    )
}

export default Index;