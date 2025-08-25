import Tabela from "../components/Historico-components/Tabela";
import {  GetCategories ,getfilter, getHistorico, getHistoricoCompleto, getHistoricovendas } from "../services/produtoServices";
import { useEffect, useState, useContext } from "react";

function Historico() {
  // pages
  const [pages, setpages] = useState(1);
  const [offset, setoffset] = useState(0);
  const [Vendas, setVendas] = useState([]);
  const [params, setparams] = useState('');
  const [Categoria, setCategoria] = useState([]);

  useEffect(() => {
    getfilter(params)
      .then((data) => setVendas(data))
      .catch((error) => console.error(error));
    GetCategories()
      .then((data) => setCategoria(data))
      .catch((error) => console.error(error));
  }, [params]);

  // const handlepages = (event, value) => {
  //   setpages(value);

  //   // services =>
  //   const offsetvalue = (value - 1) * 12;
  //   setoffset(offsetvalue);
  // };

  const TotalPages = Math.ceil(Vendas.count / 12);
  console.log(Historico)
  return (
    <>
    <select onChange={(e)=>setparams(e.target.value)}>
      <option value={''}>selecione um filtro</option>
      <option value={'?produto_mais_vendido=true'}>produto mais vendido</option>
      <option value={'?produto_menos_vendido=true'}>produto menos vendido</option>
      <option value={'?data_inicio=true'}>primeiras vendas</option>
      <option value={'?data_fim=true'}>ultimas vendas</option>
    </select>

    <select onChange={(e)=>setparams(`?categoria_id=${e.target.value}`)}>
      <option value={''}>selecione uma categoria</option>
      {Categoria.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.Categoria}</option>)}
    </select>


    <Tabela
    
      vendas={Vendas.items}
      // handlepages={handlepages}
      // count={TotalPages}
    />
    </>
  );
}

export default Historico;
