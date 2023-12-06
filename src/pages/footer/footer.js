import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Icon } from '@mui/material';
import s from './footer.module.css'

function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: ' #3b6289' }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <div className={s.cont}>
                            <p>тел: +7-999-888-77-77</p>
                            <p>e-mail: tony@mail.ru</p>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Footer;