"use client"

import { AuthenticatedDrawer } from '@/app/components';
import { Container, Stack, styled } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  maxWidth: '100vw !important',
  padding: '0 !important',
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
}));

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthenticatedDrawer />
      <StyledContainer>
        <Stack flexGrow={1}>
          {children}
        </Stack>
      </StyledContainer>
    </>
  );
}
