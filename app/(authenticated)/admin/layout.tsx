"use client"

import { AdminUserDrawer } from '@/app/components';
import { useAuth } from '@/app/providers/auth-provider';
import { Container, Stack, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  // maxWidth: '100vw !important',
  // padding: '0 !important',
}));

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user && !['admin', 'superadmin'].includes(auth.user.role)) {
      router.push('/plans');
    }
  }, [auth.user, router])

  return (
    <>
      <AdminUserDrawer />
      <StyledContainer>
        <Stack flexGrow={1}>
          {children}
        </Stack>
      </StyledContainer>
    </>
  );
}
