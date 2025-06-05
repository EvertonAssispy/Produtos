import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SvgMaterialIcons from './inputs/Buttondell'
import PaginationRounded from './inputs/Pagination'
import { ListContext } from '../Context/produtoContext'

import { Link } from "react-router-dom"

function createData(id, name, categoria, preco, date, qnt) {
    return {

        id,
        name,
        categoria,
        preco,
        history: [
            {
                date: date,
                amount: qnt,
            },

        ],

    };
}

function Row({ row, id }) {

    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow className="table-row" sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.categoria.Categoria}</TableCell>
                <TableCell align="right">{row.preco}</TableCell>
                <TableCell align="right">
                    <SvgMaterialIcons id={row.id} />  {/*  BOTÃO DE APAGAR */}
                </TableCell>
            </TableRow>
            <TableRow className={`collapse-row ${open ? 'open' : ''}`}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box className="history-box">
                            <Typography variant="subtitle1" gutterBottom>
                                Registros
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Data</TableCell>
                                        <TableCell align="right">Estoque</TableCell>
                                        <TableCell align="right">Preco total ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.preco * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        preco: PropTypes.number.isRequired,
        categoria: PropTypes.string.isRequired,

        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,

    }).isRequired,

    id: PropTypes.number.isRequired,
};


export default function CollapsibleTable({ produtos, Count, pageChange }) {

    const rows = Array.isArray(produtos)
        ? produtos.map((item) => {
            const dataformatada = new Date(item.Criado_em).toLocaleDateString('pt-BR')
            return createData(item.id, item.Nome_produto, item.Categoria, item.Preco_Produto, dataformatada, item.Quantidade)
        })


    : [];


    const infoPerPage = 5
    const TotalPages = Math.ceil(Count / infoPerPage)


    return (
        <Box sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}>
            <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
                <Table aria-label="collapsible table">
                    <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
                        <TableRow>
                            <TableCell />
                            <TableCell sx={{ fontWeight: "bold" }}>Produtos</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Categoria</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Preço</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                    <PaginationRounded Count={TotalPages} handlePageChange={pageChange} infoPerPage={5} />
                </Box>
            </TableContainer>
        </Box>
    );

}
