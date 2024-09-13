import { Container, Paper, Typography } from "@mui/material";

export default function BasicDashboardPage() {

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper style={{ padding: 16, textAlign: 'center' }}>
        <Typography variant="h6">
          Total de Usuarios
        </Typography>
        <Typography variant="h3">
          {0}
        </Typography>
      </Paper>
    </Container>
  );
}
