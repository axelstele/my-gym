import { AppBar, Button, ButtonProps, Stack, styled, Toolbar } from "@mui/material";
import { useIsMobile } from '@/app/hooks';
import { DesktopLinks, MobileLinks } from '@/app/components';
import Link from "next/link";
import Image from "next/image";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',

  paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),

  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));


const StyledButton = styled(Button) <ButtonProps>`
  padding: 0;
`

export const NotAuthenticatedAppBar = () => {
  const isMobile = useIsMobile();

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Stack direction={'row'} spacing={2}>
          <Image
            src="/logo.svg"
            alt="logo"
            height={40}
            width={40}
          />
          <StyledButton component={Link} href="/">
            MAYFITCOACH
          </StyledButton>
        </Stack>
        {isMobile ? (
          <MobileLinks />
        ) : (
          <DesktopLinks />
        )}
      </StyledToolbar>
    </AppBar>
  )
}