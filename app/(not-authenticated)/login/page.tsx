"use client"

import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// move this to utils

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('userCredential', userCredential);
      const idToken = await userCredential.user.getIdToken();

      // Enviar idToken al backend para cualquier validación adicional si es necesario
      return { idToken, uid: userCredential.user.uid };
    } catch (error) {
      console.error('Error logging in user:', error);
      throw new Error('Invalid email or password');
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const result = await login(data.email, data.password);
      sessionStorage.setItem('firebaseIdToken', result.idToken);
      sessionStorage.setItem('firebaseUid', result.uid);
      router.push('/dashboard');
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
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          label="Password"
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
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
