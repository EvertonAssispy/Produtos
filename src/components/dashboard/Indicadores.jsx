import * as React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';


export default function DashboardIndicators({ metrics }) {
  // metrics é um objeto com as informações que você quer mostrar
  // exemplo:
  // {
  //   maiorVenda: 'R$ 5.000',
  //   produtoMaisVendido: 'Camisa Polo',
  //   ultimaVenda: '27/05/2025',
  //   maiorQuantidade: 150
  // }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {/* Card Maior Venda */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Maior Venda
              </Typography>
              <Typography variant="h5" component="div">
                {metrics.maiorVenda}R$
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card Produto Mais Vendido */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ bgcolor: '#fce4ec' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Produto Mais Vendido
              </Typography>
              <Typography variant="h5" component="div">
                {metrics.produtoMaisVendido}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card Última Venda */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ bgcolor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Última Venda
              </Typography>
              <Typography variant="h5" component="div">
                {metrics.ultimaVenda}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card Maior Quantidade */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ bgcolor: '#fff3e0' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Maior Quantidade
              </Typography>
              <Typography variant="h5" component="div">
                {metrics.maiorQuantidade}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
