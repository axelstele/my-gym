"use client"

import React from 'react';
import { Button, Stack, styled } from '@mui/material';
import { useIsMobile } from '@/app/hooks';
import { AboutMe, Plans, Contact, MyStudents } from './components';
import { ImageTitle } from '../components';

const StyledStack = styled(Stack)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('background-mobile.jpg') no-repeat center center / cover`,
  minHeight: `calc(100vh - ${theme.spacing(7)})`,

  [theme.breakpoints.up('sm')]: {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('background-desktop.jpg') no-repeat center center / cover`,
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 4)
}));

export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <>
      <StyledStack
        id='home'
        flexGrow={1}
        color={'white'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={4}
        px={isMobile ? 2 : 30}
      >
        <ImageTitle
          variant={isMobile ? "h4" : "h1"}
          fontStyle='italic'
          fontWeight={700}
          lineHeight={1}
          textAlign={'center'}
        >
          PREPARATE PARA CONSEGUIR TU MEJOR VERSIÓN
        </ImageTitle>
        <StyledButton variant='contained' color='primary'>
          EMPEZÁ HOY
        </StyledButton>
      </StyledStack>
      <AboutMe />
      <Plans />
      <MyStudents />
      <Contact />
    </>
  );
}
