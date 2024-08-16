"use client"

import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyDd2xKm6gosNLLSt-LJK4b8clNx6vT96Bs",

  authDomain: "my-gym-2a748.firebaseapp.com",

  projectId: "my-gym-2a748",

  storageBucket: "my-gym-2a748.appspot.com",

  messagingSenderId: "87257846453",

  appId: "1:87257846453:web:0091552c393d7c4fa864fc",

  measurementId: "G-C7LCZEDCRE"

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
      console.log('result', result);
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
