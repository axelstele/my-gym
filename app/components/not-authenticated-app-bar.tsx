import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import { useIsMobile } from '@/app/hooks';
import { DesktopLinks, MobileLinks } from '@/app/components';
import { useRouter } from "next/navigation";
import Link from "next/link";

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const NotAuthenticatedAppBar = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button component={Link} href="/">
          MAYFITCOACH
        </Button>
        {isMobile ? (
          <MobileLinks />
        ) : (
          <DesktopLinks />
        )}
      </StyledToolbar>
    </AppBar>
  )
}