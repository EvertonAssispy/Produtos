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
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import "./css/index.css";

const drawerWidth = 240;

export default function SidebarLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));  // true se for celular
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDashboard, setOpenDashboard] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenDashboard = () => {
    setOpenDashboard(!openDashboard);
  };

  const drawerContent = (
    <div>
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/produtos" onClick={() => setMobileOpen(false)}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{color:'#333'}}>Produtos</Typography>} />
        </ListItem>

        <Divider />

        {/* <ListItem button component={Link} to="/estoque" onClick={() => setMobileOpen(false)}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{color:'#333'}}>Estoque</Typography>} />
        </ListItem> */}

        <Divider />

        <ListItem button onClick={handleOpenDashboard}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openDashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/dashboard/visao" onClick={() => setMobileOpen(false)}>
              <ListItemText primary={<Typography sx={{color:'#333'}}>Visao Geral</Typography>} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/dashboard/relatorios" onClick={() => setMobileOpen(false)}>
              <ListItemText primary={<Typography sx={{color:'#333'}}>Relatorios</Typography>} />
            </ListItem>
          </List>
        </Collapse>

        <Divider />

        <ListItem button component={Link} to="Vendas" onClick={() => setMobileOpen(false)}>
          <ListItemIcon>
            <PointOfSaleIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{color:'#333'}}>Vendas</Typography>} />
        </ListItem>

        <Divider />

        <ListItem button component={Link} to="historico" onClick={() => setMobileOpen(false)}>
          <ListItemIcon>
            <HistoryToggleOffIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{color:'#333'}}>Historico</Typography>} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar com botão de menu no mobile */}
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography button component={Link} to="Produtos" variant="h6" noWrap sx={{color:'#fff', textDecoration: 'none'}}>
            Gestão de Estoque
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) */}
      <Box component="nav">
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> 
        <Outlet />
      </Box>
    </Box>
  );
}