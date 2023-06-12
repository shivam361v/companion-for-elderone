import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MissionVisionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const Subheading = styled(Typography)({
  fontSize: '18px',
  marginBottom: '40px',
});

const ColumnsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const Column = styled(Box)({
  flexBasis: '30%',
  marginBottom: '30px',
  textAlign: 'center',
});

const MissionVision = () => {
  return (
    <MissionVisionContainer>
      <Heading variant="h2">Our Mission, Vision, and Passion</Heading>
      <Subheading variant="subtitle1">
        We strive to make a difference responsibly.
      </Subheading>
      <ColumnsContainer>
        <Column>
          <Typography variant="h5">Mission</Typography>
          <Typography variant="body1">
            Our mission is to provide exceptional products and services that
            exceed customer expectations while ensuring sustainability and
            social responsibility.
          </Typography>
        </Column>
        <Column>
          <Typography variant="h5">Vision</Typography>
          <Typography variant="body1">
            Our vision is to create a better world through innovation,
            collaboration, and ethical practices, fostering positive change for
            people and the planet.
          </Typography>
        </Column>
        <Column>
          <Typography variant="h5">Passion</Typography>
          <Typography variant="body1">
            Our passion lies in delivering excellence, fostering growth and
            well-being, and making a positive impact on the lives of our
            customers, employees, and communities.
          </Typography>
        </Column>
      </ColumnsContainer>
    </MissionVisionContainer>
  );
};

export default MissionVision;
