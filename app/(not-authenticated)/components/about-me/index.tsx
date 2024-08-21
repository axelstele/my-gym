'use client';

import { useIsMobile } from '@/app/hooks';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

export function AboutMe() {
  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <Box
      id='about-me'
      p={isMobile ? 2 : 8}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography color={theme.palette.secondary.main} variant={isMobile ? 'h4' : 'h2'} fontWeight={600} fontStyle={'italic'} gutterBottom>
            HOLA, SOY MAY!
          </Typography>
          <Typography gutterBottom>
            Bienvenido a nuestro gimnasio, donde tu bienestar y salud son nuestra prioridad. Soy May, y estoy aquí para ayudarte a alcanzar tus metas de fitness con entusiasmo y dedicación. Con años de experiencia en el mundo del ejercicio y la nutrición, mi objetivo es ofrecerte un espacio motivador y profesional para que te sientas inspirado y apoyado en cada paso de tu viaje hacia una vida más saludable.
          </Typography>
          <Typography gutterBottom>
            En nuestro gimnasio, encontrarás una amplia variedad de clases y entrenamientos personalizados diseñados para adaptarse a tus necesidades y niveles. Desde sesiones de entrenamiento intensivo hasta clases de yoga relajantes, estamos aquí para ofrecerte una experiencia integral que te ayudará a sentirte mejor y más fuerte.
          </Typography>
          <Typography gutterBottom>
            ¡Únete a nuestra comunidad y empieza tu transformación hoy! Juntos, haremos que tus objetivos de fitness se conviertan en una realidad.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} height={500}>
              <Box
                position={'relative'}
                width={'100%'}
                height={'100%'}
              >
                <Image
                  src="/about-me-1.jpg"
                  alt="Picture of the author 1"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} height={500} mt={isMobile ? 0 : 24}>
              <Box
                position={'relative'}
                width={'100%'}
                height={'100%'}
              >
                <Image
                  src="/about-me-2.jpg"
                  alt="Picture of the author 2"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
