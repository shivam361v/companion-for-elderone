
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ServiceSectionContainer = styled(Box)({
  padding: '40px',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '40px',
});

const ServicesContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const ServiceItem = styled(Box)({
    heigth: '225px',
  width: '540px',
  margin: '10px',
  padding: '20px',
  backgroundColor: '#f2f2f2',
  borderRadius: '5px',
});

const ServiceImage = styled('img')({
    width: '100%',
  marginBottom: '20px',
});

const ServiceButton = styled(Button)({
  backgroundColor: '#333',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#555',
  },
});

const ServiceSection = () => {
  return (
    <ServiceSectionContainer>
      <Heading variant="h2">Our Services</Heading>
      <ServicesContainer>
        <ServiceItem>
          <ServiceImage src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTM2NiVDMyU5Nzc2OCUyMGVsZGVybHklMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Service 1" />
          <Typography variant="h5">Health And Wellness</Typography>
          <ServiceButton variant="contained">Learn More</ServiceButton>
        </ServiceItem>
        <ServiceItem>
          <ServiceImage src="https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fDEzNjYlQzMlOTc3NjglMjBlbGRlcmx5JTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Service 2" />
          <Typography variant="h5">  Hangout with friends</Typography>
          <ServiceButton variant="contained">Learn More</ServiceButton>
        </ServiceItem>
        <ServiceItem>
          <ServiceImage src="https://images.unsplash.com/photo-1526635090919-b5d79657c5a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHwxMzY2JUMzJTk3NzY4JTIwc2VuaW9yJTIwY2l0aXplbiUyMGVudGVydGFpbm1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Service 3" />
          <Typography variant="h5">  Time to chill</Typography>
          <ServiceButton variant="contained">Learn More</ServiceButton>
        </ServiceItem>
        <ServiceItem>
          <ServiceImage src="https://images.unsplash.com/photo-1478998674531-cb7d22e769df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHwxMzY2JUMzJTk3NzY4JTIwaW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Service 4" />
          <Typography variant="h5">Food That You Like</Typography>
          <Typography variant="body1">
            
          </Typography>
          <ServiceButton variant="contained">Learn More</ServiceButton>
        </ServiceItem>
      </ServicesContainer>
    </ServiceSectionContainer>
  );
};

export default ServiceSection;
