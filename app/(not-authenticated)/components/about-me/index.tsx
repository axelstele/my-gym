'use client';

import { Title } from '@/app/components';
import { useIsMobile } from '@/app/hooks';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 12px;
`

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
          <Title
            color={theme.palette.secondary.main}
            variant={isMobile ? 'h4' : 'h2'}
            fontWeight={600}
            fontStyle={'italic'}
            gutterBottom
          >
            HOLA, SOY MAY!
          </Title>
          <Typography variant={isMobile ? 'body1' : 'h6'} gutterBottom>
            Bienvenidos a mi espacio, en donde busco acompañarte y guiarte en esto que tanto me apasiona. Desde muy pequeña, a los 18 años, comencé a interiorizarme en el mundo del fitness, capacitándome en muchas disciplinas. Durante años trabajé en gimnasios dando clases grupales, pero eso no me llenaba del todo. Fue así que hace cinco años decidí buscar mi camino y trabajar de manera independiente, pero esta vez con un enfoque más personalizado, porque creo que cada persona es única, con distintas necesidades y objetivos.
          </Typography>
          <Typography variant={isMobile ? 'body1' : 'h6'} gutterBottom>
            En continua capacitación para brindarles lo mejor como entrenadora personal y preparadora física.
          </Typography>
          <Typography variant={isMobile ? 'body1' : 'h6'} gutterBottom>
            Te invito a recorrer juntos este hermoso camino para lograr el cambio que tanto querés alcanzar!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              position='relative'
              height={600}
            >
              <Box
                position={'relative'}
                width={'100%'}
                height={'100%'}
              >
                <StyledImage
                  src="/about-me-1.jpeg"
                  alt="Picture of the author 1"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              mt={isMobile ? 0 : 32}
              position='relative'
              height={600}
            >
              <Box
                position={'relative'}
                width={'100%'}
                height={'100%'}

              >
                <StyledImage
                  src="/about-me-2.jpeg"
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
