"use client"

import { PropsWithChildren, useEffect, useState } from 'react';
import { useAuth } from '../providers/auth-provider';
import axios from 'axios';
import { CircularProgress, Stack } from '@mui/material';

export default function RootLayout({
  children,
}: PropsWithChildren) {
  const auth = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        setIsLoading(true);
        const token = sessionStorage.getItem('token');
        const baseUrl = window.location.origin;
        const response = await axios.post(`${baseUrl}/api/auth/validate-token`, { token });
        auth.setUser(response.data);
      }
      catch (e) {
        console.error(e);
      }
      finally {
        setIsLoading(false)
      }
    }

    if (!auth.user) {
      validateToken()
    }
  }, [auth]);

  if (isLoading) {
    return (
      <Stack
        height={'100vh'}
        width={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <CircularProgress />
      </Stack>
    )
  }

  return children
}
