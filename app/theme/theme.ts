import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#bd5dd7', // violet
    },
    secondary: {
      main: '#f169cd', // pink
    },
    background: {
      default: '#FFFFFF', // white
    },
    text: {
      primary: '#4A148C',
      secondary: '#F48FB1',
    },
    warning: {
      main: '#F06292',
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000000',
          fontWeight: 600
        },
        textPrimary: {
          color: '#FFFFFF',
        }
      },
    },
  }
});
