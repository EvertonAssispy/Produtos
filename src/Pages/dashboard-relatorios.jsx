import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Container = styled(Box)({
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
});

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: 350, // altura mínima
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export default function Relatorios() {
  return (
    <Container>
      <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <h3>Produtos:</h3>
            <p>Descrição ou gráfico aqui</p>
            <Button variant="contained">Baixar</Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <h3>Relatório Vendas:</h3>
            <p>Descrição ou gráfico aqui</p>
            <Button variant="contained">Baixar</Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <h3>Vendas:</h3>
            <p>Descrição ou gráfico aqui</p>
            <Button variant="contained">Baixar</Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}