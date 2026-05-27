import { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Avatar,
  Typography,
  CircularProgress,
  InputAdornment,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import GavelIcon from '@mui/icons-material/Gavel';
import { sendQuestion } from '../services/api';

export default function ChatMui() {
  const [messages, setMessages] = useState([
    { text: "Hola, soy CODEA. Puedo orientarte sobre requisitos, documentos y pasos para la pensión de alimentos en Perú. Recuerda que no soy un abogado.", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInput('');
    setLoading(true);

    try {
      const answer = await sendQuestion(userMsg);
      setMessages(prev => [...prev, { text: answer, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Lo siento, ocurrió un error. Por favor intenta más tarde.", isUser: false }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ height: '60vh', display: 'flex', flexDirection: 'column', maxWidth: 800, mx: 'auto', mt: 2 }}>
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        {messages.map((msg, idx) => (
          <Box key={idx} sx={{ display: 'flex', justifyContent: msg.isUser ? 'flex-end' : 'flex-start', mb: 2 }}>
            <Avatar sx={{ bgcolor: msg.isUser ? 'primary.main' : 'secondary.main', mr: msg.isUser ? 0 : 1, ml: msg.isUser ? 1 : 0 }}>
              {msg.isUser ? <PersonIcon /> : <GavelIcon />}
            </Avatar>
            <Paper variant="outlined" sx={{ p: 1, maxWidth: '70%', bgcolor: msg.isUser ? 'primary.light' : 'background.paper' }}>
              <Typography variant="body2">{msg.text}</Typography>
            </Paper>
          </Box>
        ))}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={20} />
            <Typography variant="caption">CODEA está escribiendo...</Typography>
          </Box>
        )}
      </Box>
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Escribe tu pregunta (ej: ¿Qué documentos necesito?)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={loading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSend} disabled={loading || !input.trim()}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
}