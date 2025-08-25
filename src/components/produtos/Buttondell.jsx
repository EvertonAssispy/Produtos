import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DeleteProducts } from '../../services/produtoServices';
import {IconButton } from '@mui/material';
import { useProdutosContext } from '../../Context/produtoContext';

export default function SvgMaterialIcons({id}) {


  const {setEnviando} =  useProdutosContext()

  const handledelete = ()=>{
      
    DeleteProducts(id)
    setEnviando(prev=> prev + 1) 
      
  }
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ color: 'text.primary' }}>
        
        <Grid size={8}>
          <IconButton  onClick={handledelete}>
            <DeleteIcon sx={{ color: 'red' }} />
          </IconButton>
          
        </Grid>
       
      </Grid>
    </Box>
  );
}
