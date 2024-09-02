import { Button, ButtonProps, Menu, MenuItem, Stack } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled(Button)<ButtonProps>`
  padding: 0;
`;

export function DesktopLinks() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnterButton = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true); // Open the menu when mouse enters the button
  };

  const handleMouseLeaveMenu = () => {
    setMenuOpen(false); // Close the menu when mouse leaves the menu area
  };

  const handleClose = () => {
    setMenuOpen(false); // Close the menu when clicking outside or losing focus
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <StyledButton href="/#home">Home</StyledButton>
      <StyledButton href="/#about-me">Sobre mí</StyledButton>

      <StyledButton
        href="/#training-plans"
        onMouseEnter={handleMouseEnterButton}
      >
        Planes
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleMouseLeaveMenu, // Close when mouse leaves the menu
          onMouseEnter: () => setMenuOpen(true), // Keep menu open if mouse re-enters
        }}
      >
        <MenuItem component={Link} href="/#training-plans">
          Planes de entrenamiento
        </MenuItem>
        <MenuItem component={Link} href="/#nutrition-plans">
          Planes nutricionales
        </MenuItem>
      </Menu>

      <StyledButton href="/#my-students">Mis alumnos</StyledButton>
      <StyledButton href="#contact">Contacto</StyledButton>
      <StyledButton component={Link} href="/login">
        Acceso alumnos
      </StyledButton>
    </Stack>
  );
}
