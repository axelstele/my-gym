"use client"

import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IFormInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('User registered:', responseData);

      // Redirect to the success page
      router.push('/home'); // Change this to the desired page
    } catch (error: any) {
      console.error('Error registering user:', error);
      setErrorMessage(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Nombre"
          {...register('firstName', { required: 'Name is required' })}
          margin="normal"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          fullWidth
          label="Apellido"
          {...register('lastName', { required: 'Surname is required' })}
          margin="normal"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          {...register('password', { required: 'Password is required' })}
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
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </Container>
  );
};

export default RegisterPage;
