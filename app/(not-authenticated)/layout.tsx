"use client"

import { Container, Stack, styled } from '@mui/material';
import { NotAuthenticatedAppBar } from '@/app/components';

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '100vw !important',
  padding: '0 !important',
}));

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack height={'100%'} maxWidth={'100vw'} p={0}>
      <NotAuthenticatedAppBar />
      <StyledContainer>
        {children}
      </StyledContainer>
    </Stack>
  );
}
