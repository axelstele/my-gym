"use client"

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-multi-carousel/lib/styles.css";

import { StyledComponentsRegistry } from './registry';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/app/theme';
import { ToastContainer } from 'react-toastify';
import { Montserrat } from 'next/font/google'
import { AuthProvider } from './providers/auth-provider';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the desired weights
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <AuthProvider>
              {children}
            </AuthProvider>
            <ToastContainer />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
