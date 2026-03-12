import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextField, Container } from '@mui/material';

const styles = {
  root: {
    minHeight: '100vh',
    maxWidth: '430px !important',
    mx: 'auto',
    backgroundColor: '#F7F8FA',
    display: 'flex',
    flexDirection: 'column',
    px: 3,
    pt: 5,
  },
  title: {
    fontWeight: 800,
    fontSize: '1.65rem',
    color: '#111827',
    letterSpacing: '-0.3px',
    mb: 1,
    lineHeight: 1.3,
  },
  subtitle: {
    color: '#6B7280',
    fontSize: '0.92rem',
    lineHeight: 1.65,
    mb: 4,
  },
  textField: {
    mb: 3,
    '& label': {
      color: '#7C3AED',
      fontSize: '0.82rem',
    },
    '& label.Mui-focused': {
      color: '#7C3AED',
    },
    '& label.Mui-error': {
      color: '#EF4444',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#fff',
      '& fieldset': {
        borderColor: '#D1D5DB',
      },
      '&:hover fieldset': {
        borderColor: '#7C3AED',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7C3AED',
      },
      '&.Mui-error fieldset': {
        borderColor: '#EF4444',
      },
    },
    '& input': {
      fontSize: '0.92rem',
      color: '#111827',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '0.75rem',
      color: '#EF4444',
      marginLeft: 0,
    },
  },
  loginBtn: {
    bgcolor: '#7C3AED',
    color: '#fff',
    borderRadius: '8px',
    py: 1.7,
    mt: 1,
    fontWeight: 700,
    fontSize: '0.95rem',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      bgcolor: '#6D28D9',
      boxShadow: 'none',
    },
    transition: 'all 0.2s ease',
  },
};

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', form.email);
      navigate('/dashboard');
    }
  };

  return (
    <Container disableGutters sx={styles.root}>
      <Typography sx={styles.title}>
        Signin to your<br />PopX account
      </Typography>

      <Typography sx={styles.subtitle}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
      </Typography>

      <TextField
        fullWidth
        label="Email Address"
        placeholder="Enter email address"
        variant="outlined"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        sx={styles.textField}
      />

      <TextField
        fullWidth
        label="Password"
        placeholder="Enter password"
        variant="outlined"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        sx={styles.textField}
      />

      <Button
        fullWidth
        variant="contained"
        disableElevation
        sx={styles.loginBtn}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Container>
  );
}