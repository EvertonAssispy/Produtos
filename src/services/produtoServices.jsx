import axios from "axios"


export async function GetProducts(pages){
    const response = await axios.get(`http://127.0.0.1:8080/produtos/v1/produtos/?page=${pages}`)

    return response.data.items
    
}

export async function GetCount(){
    const response = await axios.get(`http://127.0.0.1:8080/produtos/v1/produtos/`)
    
    return response.data.count
    
}

export async function GetCategories(){
    const response = await axios.get(`http://127.0.0.1:8080/produtos/v1/produtos/categoria/`)
    return response.data
}

export async function PostCategoria(Categoria){
    const response = await axios.post (`http://127.0.0.1:8080/produtos/v1/produtos/categoria`,

        {
            "Categoria": `${Categoria}`
        }

    )

}

export async function PostProduts(nome, preco, qnt, id){
    const response = await axios.post(`http://127.0.0.1:8080/produtos/v1/produtos`,
        {
            "Nome_Produto": `${nome}`,
            "Preco_Produto": preco,
            "Disponivel": true,
            
            "Quantidade": qnt,
            "Categoria": {
              "id": id,
              "Categoria": "string"
            }
        }
    )
}


export async function DeleteProducts(id){
    const response = await axios.delete(`http://127.0.0.1:8080/produtos/v1/produtos/delete/${id}`)
    
    return response.data
}