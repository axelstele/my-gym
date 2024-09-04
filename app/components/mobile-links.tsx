"use client"

import { IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`
  padding: 0;
`

export function MobileLinks() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <StyledIconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </StyledIconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} href="/#home">
          Home
        </MenuItem>
        <MenuItem component={Link} href="/#training-plans">
          Planes de entrenamiento
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/#nutrition-plans">
          Planes nutricionales
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/#contact">
          Contacto
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/login">
          Acceso alumnos
        </MenuItem>
      </Menu>
    </>
  )
}