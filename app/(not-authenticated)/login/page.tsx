"use client"

import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/app/providers/auth-provider';

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const auth = useAuth();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const baseUrl = window.location.origin;
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        email: data.email,
        password: data.password
      });

      const { role } = response.data;
      sessionStorage.setItem('token', response.data.token);
      auth.setUser(response.data);

      if (role === 'admin') {
        router.push('/admin/dashboard')
        return;
      }

      router.push('/plans');
    } catch (error: any) {
      console.error('Error logging in:', error);
      setErrorMessage(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Email"
          {...register('email', { required: 'Email es requerido' })}
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          {...register('password', { required: 'Password es requerido' })}
          margin="normal"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
