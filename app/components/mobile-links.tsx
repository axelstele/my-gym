"use client"

import { IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

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
        <MenuItem onClick={handleClose} component={Link} href="/about-me">
          Sobre mí
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/contact">
          Contact
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/login">
          Iniciar sesión
        </MenuItem>
      </Menu>
    </>
  )
}