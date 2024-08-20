'use client';

import { useIsMobile } from '@/app/hooks';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';

const StyledStack = styled(Stack)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('background.jpeg') no-repeat center center / cover;
`

export default function ContactPage() {
  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <StyledStack height={'100%'}>
      <Stack height={'100%'} p={8} justifyContent={'center'}>
        <Typography variant='h3' fontWeight={600} fontStyle={'italic'} width={450} lineHeight={1} color={theme.palette.primary.main}>
          CONTACTAME Y CHARLEMOS
        </Typography>
      </Stack>
      <Stack direction={'row'} bgcolor={theme.palette.secondary.main} p={8} justifyContent={'space-between'}>
        <Stack spacing={2}>
          <Typography variant='h5' fontWeight={600} fontStyle={'italic'}>
            DIRECCIÓN
          </Typography>
          <Typography>
            Calle XXXXXXXX 123, Bahía Blanca, CP 8000
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant='h5' fontWeight={600} fontStyle={'italic'}>
            CORREO
          </Typography>
          <Typography>
            mayra@hotmail.com
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant='h5' fontWeight={600} fontStyle={'italic'}>
            WHATSAPP
          </Typography>
          <Typography>
            2914602205
          </Typography>
        </Stack>
      </Stack>
    </StyledStack>
  );
}
