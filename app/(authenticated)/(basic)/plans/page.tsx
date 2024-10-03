import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const files = [
  { name: "Recetario Saludable", url: "/recetario-saludable.pdf" },
  { name: "Ganancia de masa muscular", url: "/ganancia-muscular.pdf" },
  { name: "Pérdida de grasa", url: "/perdida-grasa.pdf" },
];

export default function PlansPage() {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Typography variant="h4" gutterBottom>
          En esta sección vas a encontrar información, recetas, tips sobre nutrición y entrenamiento
        </Typography>
        <List>
          {files.map((file, index) => (
            <ListItem key={index}>
              <ListItemButton component="a" href={file.url} target="_blank" rel="noopener noreferrer">
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                <ListItemText primary={file.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
