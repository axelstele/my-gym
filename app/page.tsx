"use client"

import React from 'react';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledStack = styled(Stack)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('background.jpeg') no-repeat center center / cover;
`

export default function HomePage() {
  return (
    <StyledStack height='100%' color={'white'} alignItems={'center'} justifyContent={'center'} spacing={4}>
      <Typography variant="h2">
        ¿Estás listo para un cambio físico y mental?
      </Typography>
      <Stack spacing={1}>
        <Typography>
          ¡Enterate de todos los planes que tenemos para vos!
        </Typography>
        <Typography>
          Los entrenamientos y planes nutricionales ya están armados de forma general. No son personalizados.
        </Typography>
      </Stack>
    </StyledStack>
  );
}
