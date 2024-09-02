'use client';

import { useIsMobile } from '@/app/hooks';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import { phoneNumber, instagramUrl } from '@/app/constants';
import { options } from './options';
import { ImageTitle } from '@/app/components';

const StyledStack = styled(Stack)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('background-desktop.jpeg') no-repeat center center / cover;
`

const StyledItemStack = styled(Stack)`
  cursor: pointer;
`

export function Contact() {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  }

  const handleWhatsappClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  }

  const handleClick = (type: string) => {
    switch (type) {
      case 'whatsapp': {
        handleWhatsappClick();
        break;
      }
      case 'instagram': {
        handleInstagramClick();
        break;
      }
    }
  }

  return (
    <Box
      id='contact'
      mt={4}
    >
      <StyledStack height={isMobile ? 300 : 600}>
        <Stack
          height={'100%'}
          p={isMobile ? 2 : 8}
          justifyContent={'center'}
        >
          <ImageTitle
            variant={isMobile ? 'h5' : 'h3'}
            fontWeight={600}
            fontStyle={'italic'}
            width={isMobile ? '100%' : 450}
            lineHeight={1}
            color={theme.palette.primary.main}
          >
            CONTACTAME Y CHARLEMOS
          </ImageTitle>
        </Stack>
      </StyledStack>
      <Grid
        container
        bgcolor={theme.palette.secondary.main}
        py={isMobile ? 2 : 4}
        px={isMobile ? 2 : 8}
        spacing={isMobile ? 2 : 0}
      >
        {options.map((option) => (
          <Grid
            key={option.id}
            item
            xs={12}
            md={3}
          >
            <StyledItemStack
              spacing={isMobile ? 0 : 2}
              alignItems={'center'}
              onClick={() => handleClick(option.type)}
            >
              {option.icon}
              <Typography textAlign={'center'} fontWeight='bold'>
                {option.text}
              </Typography>
            </StyledItemStack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
