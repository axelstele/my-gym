import { Button, ButtonProps, Stack } from "@mui/material"
import Link from "next/link"
import styled from "styled-components"

const StyledButton = styled(Button)<ButtonProps>`
  padding: 0;
`

export function DesktopLinks() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledButton href="/#home">
        Home
      </StyledButton>
      <StyledButton href="/#about-me">
        Sobre mí
      </StyledButton>
      <StyledButton href="/#plans">
        Planes
      </StyledButton>
      <StyledButton href="/#my-students">
        Mis alumnos
      </StyledButton>
      <StyledButton href="#contact">
        Contacto
      </StyledButton>
      <StyledButton component={Link} href="/login" >
        Acceso alumnos
      </StyledButton>
    </Stack>
  )
}