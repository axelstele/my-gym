"use client"

import { Typography, Grid, Stack, useTheme } from '@mui/material';
import { Card } from './components';
import { useIsMobile } from '@/app/hooks';


export default function PlansPage() {
  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <Stack spacing={isMobile ? 4 : 8} p={isMobile ? 2 : 8} height={'100%'}>
      <Typography variant={isMobile ? 'h5' : 'h2'} fontWeight={600} fontStyle={'italic'} color={theme.palette.secondary.main} textAlign={'center'}>
        ELEGÍ TU PLAN DE ENTRENAMIENTO
      </Typography>
      <Grid container columnSpacing={isMobile ? 0 : 3} rowSpacing={isMobile ? 1 : 3} flexGrow={1} width={'100%'}>
        <Grid item xs={12} md={4}>
          <Card title='GIMNASIO' bgImg='background.jpeg' />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card title='ENTRENÁ DESDE CASA' bgImg='background.jpeg' />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card title='ENTRENAMIENTOS PERSONALES' bgImg='background.jpeg' />
        </Grid>
      </Grid>
    </Stack>
  );
}
