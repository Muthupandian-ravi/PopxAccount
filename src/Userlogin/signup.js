import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from '@mui/material';

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
  companyName: '',
  isAgency: 'yes',
};

const INITIAL_ERRORS = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
};

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  const validate = () => {
    const newErrors = { ...INITIAL_ERRORS };
    let isValid = true;

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

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
      const userData = {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        companyName: form.companyName,
        isAgency: form.isAgency,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    }
  };

  const fieldSx = {
    mb: 2.5,
    '& label': { color: '#7C3AED', fontSize: '0.82rem' },
    '& label.Mui-focused': { color: '#7C3AED' },
    '& label.Mui-error': { color: '#EF4444' },
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#fff',
      '& fieldset': { borderColor: '#D1D5DB' },
      '&:hover fieldset': { borderColor: '#7C3AED' },
      '&.Mui-focused fieldset': { borderColor: '#7C3AED' },
      '&.Mui-error fieldset': { borderColor: '#EF4444' },
    },
    '& input': { fontSize: '0.92rem', color: '#111827' },
    '& .MuiFormHelperText-root': { fontSize: '0.75rem', marginLeft: 0 },
  };

  return (
    <Container
      disableGutters
      sx={{
        minHeight: '100vh',
        maxWidth: '430px !important',
        mx: 'auto',
        backgroundColor: '#F7F8FA',
        display: 'flex',
        flexDirection: 'column',
        px: 3,
        pt: 5,
        pb: 5,
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: '1.65rem',
          color: '#111827',
          lineHeight: 1.3,
          mb: 3,
        }}
      >
        Create your<br />PopX account
      </Typography>

      <TextField
        fullWidth
        label="Full Name*"
        placeholder="Marry Doe"
        variant="outlined"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        error={!!errors.fullName}
        helperText={errors.fullName}
        sx={fieldSx}
      />

      <TextField
        fullWidth
        label="Phone number*"
        placeholder="Marry Doe"
        variant="outlined"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        sx={fieldSx}
      />

      <TextField
        fullWidth
        label="Email address*"
        placeholder="Marry Doe"
        variant="outlined"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        sx={fieldSx}
      />

      <TextField
        fullWidth
        label="Password*"
        placeholder="Marry Doe"
        variant="outlined"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        sx={fieldSx}
      />

      <TextField
        fullWidth
        label="Company name"
        placeholder="Marry Doe"
        variant="outlined"
        name="companyName"
        value={form.companyName}
        onChange={handleChange}
        sx={fieldSx}
      />

      <Box sx={{ mb: 4 }}>
        <FormLabel
          sx={{
            fontSize: '0.88rem',
            color: '#111827',
            fontWeight: 600,
            display: 'block',
            mb: 1,
          }}
        >
          Are you an Agency?*
        </FormLabel>
        <RadioGroup
          row
          name="isAgency"
          value={form.isAgency}
          onChange={handleChange}
        >
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  color: '#D1D5DB',
                  '&.Mui-checked': { color: '#7C3AED' },
                }}
              />
            }
            label="Yes"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.92rem' } }}
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  color: '#D1D5DB',
                  '&.Mui-checked': { color: '#7C3AED' },
                }}
              />
            }
            label="No"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.92rem' } }}
          />
        </RadioGroup>
      </Box>

      <Button
        fullWidth
        variant="contained"
        disableElevation
        onClick={handleSubmit}
        sx={{
          bgcolor: '#7C3AED',
          color: '#fff',
          borderRadius: '8px',
          py: 1.7,
          mt: 'auto',
          fontWeight: 700,
          fontSize: '0.95rem',
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': { bgcolor: '#6D28D9', boxShadow: 'none' },
          transition: 'all 0.2s ease',
        }}
      >
        Create Account
      </Button>
    </Container>
  );
}