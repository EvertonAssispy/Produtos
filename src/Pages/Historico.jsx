import Tabela from "../components/Historico-components/Tabela";
import { getHistorico, getHistoricovendas } from "../services/produtoServices";
import { useEffect, useState, useContext } from "react";

function Historico() {
  // pages
  const [pages, setpages] = useState(1);
  const [offset, setoffset] = useState(0);
  const [Vendas, setVendas] = useState([]);

  useEffect(() => {
    getHistoricovendas(offset)
      .then((data) => setVendas(data))
      .catch((error) => console.error(error));
  }, [offset]);

  const handlepages = (event, value) => {
    setpages(value);

    // services =>
    const offsetvalue = (value - 1) * 12;
    setoffset(offsetvalue);
  };

  const TotalPages = Math.ceil(Vendas.count / 12);

  return (
    <Tabela
      vendas={Vendas.items}
      handlepages={handlepages}
      count={TotalPages}
    />
  );
}

export default Historico;
