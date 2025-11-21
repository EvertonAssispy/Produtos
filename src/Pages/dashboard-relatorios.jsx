import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DashProduto from '../components/Relatorios/DashProduto';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import NumbersIcon from '@mui/icons-material/Numbers';
import SellIcon from '@mui/icons-material/Sell';

import WarehouseIcon from '@mui/icons-material/Warehouse';

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
  minHeight: 300, // altura mínima
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));


export default function Relatorios() {
  return (
    <Container>
      <Grid container spacing={3} sx={{ maxWidth: 1900 }}>
        <Grid item xs={10} md={3}>
          <Card>
            <DashProduto nameclass={'Produtos Cadastrados'} icon={<Inventory2Icon style={{fontsize: 50,  color: "#23449ce0" }}/>}/>
            <Button variant="contained">Baixar</Button>
          </Card>
        </Grid>
        <Grid item xs={10} md={3}>
          <Card>
            <DashProduto nameclass={'Qnt Total'} icon={<NumbersIcon style={{fontsize: 50,  color: "#092712be" }}/>}/>
            <Button variant="contained">Baixar</Button>
          </Card>
        </Grid>
        <Grid item xs={10} md={3}>
          <Card>
            <DashProduto nameclass={'Valor Total'} icon={<SellIcon style={{fontsize: 50,  color: "'#1f2709be" }}/>}/>
            <Button variant="contained">Baixar</Button>
          </Card>
        </Grid>
        <Grid item xs={10} md={3}>
          <Card>
            <DashProduto nameclass={'Estoque baixo'} icon={<WarehouseIcon style={{fontsize: 50,  color: "#3d0808be" }}/>}/>
            <Button variant="contained">Baixar</Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}