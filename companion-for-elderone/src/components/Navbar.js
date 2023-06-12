import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StyledNavbar = styled(AppBar)({
  backgroundColor: 'blue',
});

const StyledLogo = styled('img')({
  height: '50px',
  marginRight: '50px',
});

const Navbar = () => 
{
  return (
    <StyledNavbar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <StyledLogo src="https://www.yourtango.com/sites/default/files/styles/body_image_default/public/2020/symbols-strength-oak-tree.png" alt="care"  />
          <Typography variant="h6" component="div">
            Companion For Elderone
          </Typography>
        </Box>
      </Toolbar>
    </StyledNavbar>
  );
};

export default Navbar;
