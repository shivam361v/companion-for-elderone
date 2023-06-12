import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ServiceSectionContainer = styled(Box)({
  position: 'relative',
  backgroundImage: 'url("https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTM2NiVDMyU5Nzc2OCUyMGVsZGVybHklMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")',
  backgroundSize: 'cover',
  height: '500px',
  width : '1200px',
  backgroundPosition: 'center',
  padding: '100px',
  textAlign: 'center',
  color: '#fff',
});

const Heading = styled(Typography)({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '40px',
});

const LinkContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
});

const Link = styled('a')({
  margin: '0 20px',
  color: 'black',
  fontSize: '22px',
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const ServiceOne = () => {
  return (
    <ServiceSectionContainer>
      <Heading variant="h2" color={"black"}>Our Services</Heading>
      <LinkContainer>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          My Son Number
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          MY Husband Number
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Emergency Number
        </Link>
      </LinkContainer>
    </ServiceSectionContainer>
  );
};

export default ServiceOne;
