import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ServiceCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  padding: '20px',
  borderRadius: '5px',
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
}));

const BackgroundImage = styled(Box)(({ image }) => ({
  background: `url(${image}) center/cover`,
  height: '200px',
  borderRadius: '5px',
  marginBottom: '20px',
}));

const Title = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
});

const Subtitle = styled(Typography)({
  fontSize: '14px',
  color: '#777',
  marginBottom: '20px',
});

const Link = styled('a')(({ theme }) => ({
  color: '#333',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const ServiceCard = ({ backgroundImage, title1, link1, title2, link2, title3, link3 }) => {
  return (
    <ServiceCardContainer>
      <BackgroundImage image={backgroundImage} />
      <Title variant="h5">
        <Link href={link1} target="_blank" rel="noopener noreferrer">
          {title1}
        </Link>
      </Title>
      <Title variant="h5">
        <Link href={link2} target="_blank" rel="noopener noreferrer">
          {title2}
        </Link>
      </Title>
      <Title variant="h5">
        <Link href={link3} target="_blank" rel="noopener noreferrer">
          {title3}
        </Link>
      </Title>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
