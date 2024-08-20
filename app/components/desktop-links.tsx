import { Button, Stack } from "@mui/material"
import Link from "next/link"

export function DesktopLinks() {
  return (
    <Stack direction="row" spacing={2}>
      <Button component={Link} href="/">
        Home
      </Button>
      <Button component={Link} href="/plans">
        Planes
      </Button>
      <Button component={Link} href="/about-me">
        Sobre mí
      </Button>
      <Button component={Link} href="/contact">
        Contact
      </Button>
      <Button component={Link} href="/login" >
        Iniciar sesión
      </Button>
    </Stack>
  )
}