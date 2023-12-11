import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './header.css';
import { Icon } from '@mui/material';

function Header() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: ' #3b6289'}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton >
          <Typography className="typo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SINERGY
          </Typography>
          <Button component={Link} to ="/" color="inherit"><p className="item">Главная</p></Button>
          <Button component={Link} to ="/skills" color="inherit"><p className="item">Навыки</p></Button>
          <Button component={Link} to ="/portfolio" color="inherit"><p className="item">Портфолио</p></Button>
          <Button component={Link} to ="/contacts" color="inherit"><p className="item">Контакты</p></Button>
          <Button component={Link} to ="/respect" color="inherit"><p className="item">Respect</p></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;