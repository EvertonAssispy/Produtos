import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StoreIcon from "@mui/icons-material/Store";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "../css/download.css";
import {
  deletehistorico,
  getHistoricovendas,
} from "../../services/produtoServices";
import PaginationRounded from "../produtos/Pagination";
import { useState } from "react";
// import ViewsPdf from "../Downloads.jsdx/View"


function confirmarEDeletar() {
  const confirmado = window.confirm(
    "Tem certeza que deseja deletar o historico de vendas?"
  );

  if (confirmado) {
    deletehistorico();
  } else {
    console.log("Ação cancelada pelo usuário.");
  }
}

export default function AccessibleTable({ vendas }) {
  function createData(name, qnt, price, valoruni, data, hora) {
    return { name, qnt, price, valoruni, data, hora };
  }

  const rows = Array.isArray(vendas)
    ? vendas.map((item) => {
        const dataformatada = new Date(item.data).toLocaleDateString(
          "pt-BR"
        );

        const horaformatada = new Date(item.data).toLocaleTimeString(
          "pt-BR"
        );
        return createData(
          item.produto,
          item.quantidade,
          item.valor_da_venda,
          item.valor_uni,
          dataformatada,
          horaformatada
        );
      })
    : []; // OU

  return (
    <div className="containers">
      <TableContainer component={Paper}>
    

        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>
            Analise de vendas,{" "}
            <span
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={confirmarEDeletar}
            >
              clique se quiser apagar o historico de vendas
            </span>
          </caption>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Produtos vendidos</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Uni.</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Preco uni.</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Valor</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Data da Venda</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Horas</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.qnt}</TableCell>
                <TableCell align="right">{row.valoruni}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.data}</TableCell>
                <TableCell align="right">{row.hora}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      {/*<PaginationRounded Count={count} handlePageChange={handlepages} /> */}   
      </TableContainer>

      <div className="download">
        {/* <Button
          className="botao"
          onClick={() => ViewsPdf(Historico)}
          variant="outlined"
          startIcon={<FileDownloadIcon />}
        >
          Download aqui
        </Button> */}
      </div>
    </div>
  );
}
