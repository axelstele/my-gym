import { useIsMobile } from "@/app/hooks"
import { Grid, Stack, Typography, useTheme } from "@mui/material"
import { Card } from "./card";

export const Plans = () => {
  const isMobile = useIsMobile()
  const theme = useTheme();

  return (
    <Stack
      id='plans'
      spacing={isMobile ? 4 : 8}
      p={isMobile ? 2 : 8}
    >
      <Typography variant={isMobile ? 'h5' : 'h2'} fontWeight={600} fontStyle={'italic'} color={theme.palette.secondary.main} textAlign={'center'}>
        ELEGÍ TU PLAN DE ENTRENAMIENTO
      </Typography>
      <Grid container columnSpacing={isMobile ? 0 : 3} rowSpacing={isMobile ? 1 : 3} width={'100%'}>
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
  )
}