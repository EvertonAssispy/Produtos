import { Card, CardContent, Typography, Grid, Box} from "@mui/material";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";



export default function GraficoPizza({Porcentagem, metrics}) {
  console.log(Porcentagem)

  if (!metrics || metrics.length === 0) {
    return (
      <Card sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Distribuição de Produtos
          </Typography>
          <Typography variant="body2">Nenhum dado para exibir.</Typography>
        </CardContent>
      </Card>
    );
  }

    

    const data = Porcentagem.map((categoria) => ({
        'name': categoria.Categoria,
        'value': Number(categoria.Porcentagem)
    })).filter((item)=>item.value > 0)
      
    
   
    

    const COLORS = ["#1976d2", "#9c27b0", "#ff9800", "#4caf50", '#4caf20', "#9c2745", "#197690"];


    const date = new Date(metrics.ultima_venda).toLocaleDateString('pt-BR')

    

  return (
    <div className="dashboard">
      <Card sx={{ maxWidth: 500, mx: "auto", mt: 8 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Distribuição de Produtos
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>




                
                {/* // INDICADORES */}
      <Box sx={{ flexGrow: 1, padding: 2, mx: "auto", mt: 8, maxWidth: 1000 }}>
        <Grid container spacing={2} justifyContent="center">
          {/* Card Maior Venda */}
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ bgcolor: '#c8e6c9' }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Maior Venda
                </Typography>
                <Typography variant="h5" component="div">
                  {metrics.maior_venda}R$
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card Produto Mais Vendido */}
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ bgcolor: '#bbdefb' }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Produto Mais Vendido
                </Typography>
                <Typography variant="h5" component="div">
                  {metrics.produto_mais_vendido}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card Última Venda */}
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ bgcolor: '#e1bee7' }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Última Venda
                </Typography>
                <Typography variant="h5" component="div">
                  {date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card Maior Quantidade */}
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ bgcolor: '#fff9c4' }}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Maior venda un.
                </Typography>
                <Typography variant="h5" component="div">
                  {metrics.maior_venda_qnt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>



  );
}