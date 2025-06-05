import { Outlet, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  Box,
  CssBaseline,
  ListItemIcon,
  Divider,
  Collapse,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import "./css/index.css";
import { useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

export default function SidebarLayout() {
  const [openDashboard, setopenDashboard] = useState(true);

  const handleopenDashboard = () => {
    setopenDashboard(!openDashboard);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Sistema de Produtos
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        <List>
          <ListItem button component={Link} to="/produtos">
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography sx={{ color: "#333" }}>Produtos</Typography>}
            />
          </ListItem>

          <Divider sx={{ opacity: 0.8 }} />

          <ListItem button component={Link} to="/estoque">
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography sx={{ color: "#333" }}>Estoque</Typography>}
            />
          </ListItem>

          <Divider sx={{ opacity: 0.8 }} />

          <ListItem button onClick={handleopenDashboard}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ color: "#333" }}>Dashboard</Typography>
              }
            />
            {openDashboard ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openDashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                component={Link}
                to="/dashboard/visao"
              >
                <ListItemText primary={<Typography sx={{ color: "#333" }}>Visao Geral</Typography>} />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                component={Link}
                to="/dashboard/relatorios"
              >
                <ListItemText primary={<Typography sx={{ color: "#333" }}>Relatórios</Typography>} />
              </ListItem>
            </List>
          </Collapse>

          <Divider sx={{ opacity: 0.8 }} />

          <ListItem button component={Link} to="#">
            <ListItemIcon>
              <PointOfSaleIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography sx={{ color: "#333" }}>Vendas</Typography>}
            />
          </ListItem>

          <Divider sx={{ opacity: 0.8 }} />

          <ListItem button component={Link} to="historico">
            <ListItemIcon>
              <HistoryToggleOffIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ color: "#333" }}>Historico</Typography>
              }
            />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* espaço para o AppBar */}
        <Outlet />
      </Box>
    </Box>
  );
}
