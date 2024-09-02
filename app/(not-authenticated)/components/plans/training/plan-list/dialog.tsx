import { Dialog as MuiDialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, styled, List, ListItem, ListItemText, ListItemIcon, Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { phoneNumber } from "@/app/constants";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  items?: string[];
}

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '.MuiDialog-paper': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: theme.spacing(4),
  color: theme.palette.primary.main,
}));

const StyledListItem = styled(ListItem)`
  padding: 0;
`;

const StyledListItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyledDialogContentText = styled(DialogContentText)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Dialog = ({
  open,
  onClose,
  title,
  subtitle,
  items
}: Props) => {

  const handleOrderClick = (planName: string) => {
    const message = `Hola! Estoy interesado en el plan ${planName}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  if (!open) {
    return null;
  }

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth='sm'
    >
      <StyledDialogTitle
        textAlign={'center'}
        fontWeight={'bold'}
        variant='h4'
      >
        {title}
      </StyledDialogTitle>
      <DialogContent>
        <StyledDialogContentText fontWeight={600}>
          {subtitle}
        </StyledDialogContentText>
        <List>
          {items?.map((item, index) => (
            <StyledListItem key={index}>
              <StyledListItemIcon>
                <CheckIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={item} />
            </StyledListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Stack direction={'row'} justifyContent={'center'} width={'100%'}>
          <Button
            onClick={() => handleOrderClick(title!)}
            color="secondary"
            variant='contained'
          >
            Contratar
          </Button>
        </Stack>
      </DialogActions>
    </StyledDialog>
  )
}
