import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
  root: {
    minHeight: '100vh',
    maxWidth: '430px !important',
    mx: 'auto',
    backgroundColor: '#F7F8FA',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    px: 0,
  },
  bottomSection: {
    px: 3,
    pb: 5,
    pt: 2,
    position: 'relative',
    zIndex: 10,
  },
  title: {
    fontWeight: 800,
    fontSize: '1.65rem',
    color: '#111827',
    letterSpacing: '-0.3px',
    mb: 1,
  },
  subtitle: {
    color: '#6B7280',
    fontSize: '0.92rem',
    lineHeight: 1.65,
    mb: 4,
  },
  primaryBtn: {
    bgcolor: '#7C3AED',
    color: '#fff',
    borderRadius: '8px',
    py: 1.7,
    mb: 1.5,
    fontWeight: 700,
    fontSize: '0.95rem',
    textTransform: 'none',
    letterSpacing: '0.1px',
    boxShadow: '0 4px 14px rgba(124,58,237,0.35)',
    '&:hover': {
      bgcolor: '#6D28D9',
      boxShadow: '0 6px 20px rgba(124,58,237,0.45)',
    },
    transition: 'all 0.2s ease',
  },
  secondaryBtn: {
    bgcolor: '#EDE9FE',
    color: '#7C3AED',
    borderRadius: '8px',
    py: 1.7,
    fontWeight: 700,
    fontSize: '0.95rem',
    textTransform: 'none',
    letterSpacing: '0.1px',
    boxShadow: 'none',
    '&:hover': {
      bgcolor: '#DDD6FE',
      boxShadow: 'none',
    },
    transition: 'all 0.2s ease',
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container disableGutters sx={styles.root}>
      <Box sx={styles.bottomSection}>
        <Typography sx={styles.title}>Welcome to PopX</Typography>
        <Typography sx={styles.subtitle}>
          Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={styles.primaryBtn}
          onClick={() => navigate('/register')}
        >
          Create Account
        </Button>

        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={styles.secondaryBtn}
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </Button>
      </Box>
    </Container>
  );
}