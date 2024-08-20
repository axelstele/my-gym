"use client"

import { Container, Stack, styled } from '@mui/material';
import { NotAuthenticatedAppBar } from '@/app/components';

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
      <NotAuthenticatedAppBar />
      <StyledContainer>
        <Stack flexGrow={1}>
          {children}
        </Stack>
      </StyledContainer>
    </>
  );
}
