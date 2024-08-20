"use client"

import React from 'react';
import { Button, Container, Stack, styled, Typography } from '@mui/material';
import { NotAuthenticatedAppBar } from './components';
import { useIsMobile } from '@/app/hooks';

const StyledStack = styled(Stack)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('background.jpeg') no-repeat center center / cover;
`

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  maxWidth: '100vw !important',
  padding: '0 !important',
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 4)
}));

export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <>
      <NotAuthenticatedAppBar />
      <StyledContainer>
        <Stack flexGrow={1}>
          <StyledStack height='100%' color={'white'} alignItems={'center'} justifyContent={'center'} spacing={4} px={isMobile ? 2 : 30}>
            <Typography variant={isMobile ? "h4" : "h1"} fontStyle='italic' fontWeight={700} lineHeight={1} textAlign={'center'}>
              PREPARATE PARA CONSEGUIR TU MEJOR VERSIÓN
            </Typography>
            <StyledButton variant='contained' color='primary'>
              EMPEZÁ HOY
            </StyledButton>
          </StyledStack>
        </Stack>
      </StyledContainer>
    </>
  );
}
