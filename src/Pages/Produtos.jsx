import Input from "../components/inputs/Input";
import CollapsibleTable from "../components/Tableproducts";
import { useEffect, useState, useContext } from "react";
import {
  DeleteProducts,
  GetCategories,
  GetProducts,
  PostProduts,
} from "../services/produtoServices";
import { createContext } from "react";
import { ProdutosContext } from "../Context/produtoContext";
// import "../components/css/dashboard";
import "../css/index.css";

function Produtos() {
  const [enviando, setEnviando] = useState(0);
  const [Page, setPage] = useState(1);
  const [erro, seterro] = useState("");

  const [Categoria, setCategoria] = useState([]);
  const [categoriaselecionada, setcategoriaselecionada] = useState([]);
  const [Produtos, setProdutos] = useState([]);
  const [nomeProduto, setnomeProduto] = useState();
  const [precoProduto, setprecoProduto] = useState();
  const [qntproduto, setqntProduto] = useState();
  const [Count, setCount] = useState([]);


  useEffect(() => {

    GetProducts(Page)
      .then((data) => {
        setProdutos(data.items);
        return data
      })
      .then((data) => setCount(data.count))
      .catch((erro) => console.error(erro));

  }, [enviando, Page]);

  useEffect(() => {

    GetCategories()
      .then((data) => setCategoria(data))
      .catch((erro) => console.error(erro));

  }, [enviando])



  const pageChange = (event, value) => {
    setPage(value);
    GetProducts(value);
  };




  const enviar = async () => {
    if (
      !nomeProduto ||
      !precoProduto ||
      !qntproduto ||
      categoriaselecionada.length === 0
    ) {
      seterro("Preencha todos os campos antes de enviar!");
      return;
    }

    if (Produtos.filter((produto) => produto.Nome_produto === nomeProduto)) {
      seterro("Já existe produto com esse nome!");
    }
    // se nome, for igual ao nome ja cadastrado === produto  ja cadastrado

    try {
      await PostProduts(
        nomeProduto,
        precoProduto,
        qntproduto,
        categoriaselecionada
      );
      setEnviando((prev) => prev + 1);
      setnomeProduto("");

      seterro(""); // Limpa o erro se deu tudo certo
    } catch (error) {
      console.error("erro ao enviar", error);
      seterro("Erro ao cadastrar o produto.");
    }
  };







  return (
    <div className="page-wrapper">
      <div className="container">
        <ProdutosContext.Provider value={{ setEnviando, enviar, seterro, erro, Categoria }}>
          <Input

            setcategoriaselecionada={setcategoriaselecionada}
            setnomeProduto={setnomeProduto}
            setprecoProduto={setprecoProduto}
            setqntProduto={setqntProduto}
          />
          {(Count === 0) ?

            <div className="semprodutos">
              <h1>Nao há produtos</h1>
              <h1>cadastrados no momento.</h1>


            </div> :




            <div className="table">
              <CollapsibleTable
                produtos={Produtos}
                Count={Count}
                pageChange={pageChange}
              />
            </div>
          }
        </ProdutosContext.Provider>
        
      </div>
    </div>
  );
}

export default Produtos;
