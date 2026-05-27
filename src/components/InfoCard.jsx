import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

export default function InfoCard() {
  return (
    <Card sx={{ maxWidth: 800, mx: 'auto', mt: 4, mb: 2, backgroundColor: '#eef2ff' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          🤔 ¿Cómo usar CODEA?
        </Typography>
        <Typography variant="body2" paragraph>
          CODEA es un asistente legal ciudadano que responde preguntas sobre <strong>pensión de alimentos en Perú</strong>.
          Solo utiliza información de leyes y códigos oficiales. No reemplaza a un abogado.
        </Typography>
        <Typography variant="subtitle2">✅ Puedes preguntar:</Typography>
        <List dense>
          <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small"/></ListItemIcon><ListItemText primary="¿Qué documentos necesito para iniciar una demanda de alimentos?" /></ListItem>
          <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small"/></ListItemIcon><ListItemText primary="¿Cuánto tiempo tarda el proceso?" /></ListItem>
          <ListItem><ListItemIcon><CheckCircleIcon color="success" fontSize="small"/></ListItemIcon><ListItemText primary="¿Qué pasa si el padre no paga?" /></ListItem>
        </List>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>❌ No puedo:</Typography>
        <List dense>
          <ListItem><ListItemIcon><WarningIcon color="warning" fontSize="small"/></ListItemIcon><ListItemText primary="Calcular montos exactos de pensión." /></ListItem>
          <ListItem><ListItemIcon><WarningIcon color="warning" fontSize="small"/></ListItemIcon><ListItemText primary="Actuar como un abogado en tu caso específico." /></ListItem>
        </List>
        <Typography variant="caption" color="textSecondary">
          * Las respuestas son orientativas. Consulta siempre con un profesional del derecho.
        </Typography>
      </CardContent>
    </Card>
  );
}