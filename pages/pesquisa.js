import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: "",
        Email: "",
        Whatsapp: "",
        Nota: 0
    });

    const notas = [0, 1, 2, 3, 4, 5];

    const [success, setSuccess] = useState(false);
    const [retorno, setRetorno] = useState({});
    const save = async () => { 
        try{
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json();

            setSuccess(true);
            setRetorno(data);
        }
        catch(err){

        }
    }

    const changeOn = event => {
        const value = event.target.value;
        const key = event.target.name;
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className="pt-6">
            <PageTitle title="Pesquisa" />
            <h1 className="text-center font-bold my-4 text-6x1">Critícas e sugestões</h1>
            <p className="text-center mb-6 font-bold text-gray-900">Nós sempre procuramos por atender melhor nossos clientes.<br />
                Por isso , estamos sempre abertos para ouvir sua opinião.</p>
           {!success && <div className="w-1/5 mx-auto">
               <label className="font-bold">
                   Seu nome:
               </label>
               <input type="text" className="p-4 block shadow my-2 mb-4 border-2 border-gray-800 border-solid rounded-lg" onChange={changeOn} name="Nome" value={form.Nome}/>
                <label className="font-bold">
                   Seu e-mail:
               </label>
               <input type="text" className="p-4 block shadow my-2 mb-4 border-2 border-gray-800 border-solid rounded-lg" onChange={changeOn} name="Email" value={form.Email}/>
                <label className="font-bold">
                   Seu Whatsapp:
               </label>
               <input type="text" className="p-4 block shadow my-2 mb-4 border-2 border-gray-800 border-solid rounded-lg" onChange={changeOn} name="Whatsapp" value={form.Whatsapp}/>
                <div className="flex py-4">
                    {notas.map(nota => {
                    return (<label className="block w-1/6 text-center font-bold">{nota}<br />
                                 <input type="radio" name="Nota" value={nota} onChange={changeOn}/> 
                            </label>)
                    }  
                    )}
                </div>
               <button className="rounded-lg shadow-lg font-bold px-6 py-4 mb-4 bg-gray-800 text-white hover:shadow" onClick={save}>Salvar</button>
            </div>}
            {success && <div className="w-3/5 text-center mx-auto">
                <p className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4" >Obrigado por contribuir com sua sugestão ou crítica.</p>
                {
                    retorno.showCoupon && <div>
                            <p className="mb-4 border">Cupom: <br /><strong className="text-2xl">{retorno.Cupom}</strong></p>
                            <p className="mb-4 border font-bold">{retorno.Promo}
                              <p className="my-4 font-normal italic">Tire um print desta tela e apresente ao garçom.</p>
                            </p> 

                        </div>
                }
            </div>}
        </div>
    )
}

export default Pesquisa;