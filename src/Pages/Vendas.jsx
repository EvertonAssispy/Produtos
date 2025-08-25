import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { GetProductss, Venda } from "../services/produtoServices";

export default function Vendas() {
  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    GetProductss()
    .then((data)=>{
      setProdutos(data.items)
    })
    .catch((error)=> console.error(error))
  }, []);

  const handleRegistrarVenda = async () => {
    if (!produtoSelecionado || quantidade < 1) {
      alert("Selecione um produto e informe uma quantidade válida.");
      return;
    }

    if (produtoSelecionado.Quantidade < quantidade){
      alert(`Nao ha ${quantidade} desse produto no estoque`)
    }
   
    try {
      Venda(produtoSelecionado.id, quantidade)
      setProdutoSelecionado(null)
      alert("Venda registrada com sucesso!")
    } catch{
      (error)=> console.log(error)
    }

  };
console.log(produtoSelecionado)
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Registrar Venda Única
      </Typography>

      <Autocomplete
        options={produtos}
        getOptionLabel={(option) => `${option.Nome_produto} - R$ ${option.Preco_Produto}`}
        onInputChange={(event, newInputValue) => setSearch(newInputValue)}
        onChange={(event, newValue) => setProdutoSelecionado(newValue)}
        value={produtoSelecionado}
        renderInput={(params) => (
          <TextField {...params} label="Pesquisar Produto" placeholder="Digite o nome..." />
        )}
        sx={{ minWidth: 300, mb: 2 }}
      />

      <TextField
        label="Quantidade"
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
        sx={{ width: 150, mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleRegistrarVenda}
        disabled={!produtoSelecionado || quantidade < 1 || produtoSelecionado.Quantidade < quantidade}
      
      >
        Registrar Venda
      </Button>
    </Box>
  );
}
