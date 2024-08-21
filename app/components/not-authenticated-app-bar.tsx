import { AppBar, Button, ButtonProps, styled, Toolbar } from "@mui/material";
import { useIsMobile } from '@/app/hooks';
import { DesktopLinks, MobileLinks } from '@/app/components';
import Link from "next/link";

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
        <StyledButton component={Link} href="/">
          MAYFITCOACH
        </StyledButton>
        {isMobile ? (
          <MobileLinks />
        ) : (
          <DesktopLinks />
        )}
      </StyledToolbar>
    </AppBar>
  )
}