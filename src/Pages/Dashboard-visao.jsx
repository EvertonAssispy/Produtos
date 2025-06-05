import GraficoPizza from "../components/dashboard/GraficoPizza";
import { useEffect, useState } from "react";
import { GetCategories,  getHistorico } from "../services/produtoServices";



export default function Dashboard(){

    const [Porcentagem, setPorcentagem] = useState([])
    const [Estatisticas, setEstatisticas] = useState([]);


    useEffect(()=>{
        
        GetCategories()
        .then((data)=>{setPorcentagem(data)})
        .catch((error)=>{console.error((error))})   

        getHistorico()
            .then((data) =>setEstatisticas(data.estatisticas))
            .catch(error => console.error(error))

    }, [])

    
    console.log(Estatisticas)
    

    return (



        <GraficoPizza metrics={Estatisticas} Porcentagem={Porcentagem}/>
    )
}