"use client";

import './globals.css';
import { StyledComponentsRegistry } from './registry';
import { AppBar, Toolbar, Typography, Container, Button, Stack, styled, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  maxWidth: '100vw !important',
  padding: '0 !important',
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AppBar position="static">
            <StyledToolbar>
              <Typography variant="h6">My Gym app</Typography>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} component={Link} href="/">
                      Home
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} href="/plans">
                      Planes
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} href="/sobre-mi">
                      Sobre mí
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} href="/login">
                      Iniciar sesión
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Stack direction="row" spacing={2}>
                  <Button color="inherit" component={Link} href="/">
                    Home
                  </Button>
                  <Button color="inherit" component={Link} href="/plans">
                    Planes
                  </Button>
                  <Button color="inherit" component={Link} href="/sobre-mi">
                    Sobre mí
                  </Button>
                  <Button color='inherit' component={Link} href="/login" >
                    Iniciar sesión
                  </Button>
                </Stack>
              )}
            </StyledToolbar>
          </AppBar>
          <StyledContainer>
            <Stack flexGrow={1}>
              {children}
            </Stack>
          </StyledContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
