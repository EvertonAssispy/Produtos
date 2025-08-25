import axios from "axios";

//const baseURl = 'https://backprodutos-production.up.railway.app'
const baseURl = 'http://127.0.0.1:8080'
// PRODUTOS

export async function GetProducts(pages) {
  const response = await axios.get(
    `${baseURl}/produtos/v1/produtos/?page=${pages}&page_size=5`
  );

  return response.data;
}

export async function GetProductss() {
  const response = await axios.get(
    `${baseURl}/produtos/v1/produtos/`
  );

  return response.data;
}

export async function PostProduts(nome, preco, qnt, id) {
  const response = await axios.post(
    `${baseURl}/produtos/v1/produtos/`,
    {
      Nome_Produto: `${nome}`,
      Preco_Produto: preco,
      Disponivel: true,

      Quantidade: qnt,
      Categoria: {
        id: id,
        Categoria: "string",
      },
    }
  );
}

export async function DeleteProducts(id) {
  const response = await axios.delete(
    `${baseURl}/produtos/v1/produtos/delete/${id}`
  );

  return response.data;
}

// CATEGORIAS

export async function GetCategories() {
  const response = await axios.get(
    `${baseURl}/produtos/v1/produtos/categoria/`
  );
  return response.data;
}

export async function PostCategoria(Categoria) {
  const response = await axios.post(
    `${baseURl}/produtos/v1/produtos/categoria/`,

    {
      Categoria: `${Categoria}`,
    }
  );
}

// VENDAS

export async function Venda(id, quantidade) {
  const response = await axios.post(
    `${baseURl}/produtos/v1/vendas/${id}`,
    {
    
      "Quantidade": quantidade,
    }
  );
}

export async function getHistorico() {
  const response = await axios.get(
    `${baseURl}/produtos/v1/vendas/infos/`
  );
  return response.data;
}

export async function getHistoricovendas(offset) {
  const response = await axios.get(
    `${baseURl}/produtos/v1/vendas/infosgeral/?limit=12&offset=${offset}`
  );
  return response.data;
}

export async function getHistoricoCompleto(){

  const response = await axios.get(`${baseURl}/produtos/v1/vendas/infosgeral/`)
  return response.data
}


// DELETE HISTORICO DE VENDAS

export async function deletehistorico() {
  const response = await axios.delete(
    `${baseURl}/produtos/v1/vendas/infos/delete/`
  );
}

// FILTRO

export async function getfilter(params) {
  const response = await axios.get(
    `${baseURl}/produtos/v1/vendas/filter/infos/${params}`
  );
  return response.data;

}