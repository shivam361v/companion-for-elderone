import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HeroSectionContainer = styled(Box)({
  background: `url('https://images.unsplash.com/photo-1522016480855-67a9f8416d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZGVybHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <Box>
        <Typography variant="h2" component="h1" color="primary" gutterBottom>
          Companion For Elderone
        </Typography>
        <Typography variant="subtitle1" component="p" color="primary" gutterBottom>
          A Small Gesture To Make You Feel Stronger 
        </Typography>
        <Button variant="containted" color="black" size="large">
          Get Started
        </Button>
      </Box>
    </HeroSectionContainer>
  );
};

export default HeroSection;
