import { Box, Typography, Container, Avatar, IconButton } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    isAgency: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('user');
    
    if (loggedInStatus === 'true' && storedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null;
  }

  const displayName = userData.fullName || 'Marry Doe';
  const displayEmail = userData.email || 'Marry@Gmail.Com';
  const avatarLetter = displayName.charAt(0).toUpperCase();

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
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          px: 3,
          py: 2,
          borderBottom: '1px dashed #E5E7EB',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '1rem',
            color: '#111827',
          }}
        >
          Account Settings
        </Typography>
        
        <Typography
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            navigate('/login');
          }}
          sx={{
            fontSize: '0.85rem',
            color: '#7C3AED',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Logout
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: '#fff',
          px: 3,
          py: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderBottom: '1px dashed #E5E7EB',
        }}
      >
        <Box sx={{ position: 'relative', flexShrink: 0 }}>
          <Avatar
            alt={displayName}
            sx={{ 
              width: 64, 
              height: 64,
              bgcolor: '#7C3AED',
              fontSize: '1.5rem',
              fontWeight: 500,
            }}
          >
            {avatarLetter}
          </Avatar>
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: -4,
              bgcolor: '#7C3AED',
              color: '#fff',
              width: 22,
              height: 22,
              '&:hover': { bgcolor: '#6D28D9' },
            }}
          >
            <CameraAltIcon sx={{ fontSize: 13 }} />
          </IconButton>
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#111827',
              mb: 0.3,
            }}
          >
            {displayName}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.82rem',
              color: '#6B7280',
            }}
          >
            {displayEmail}
          </Typography>
          
          {userData.phone && (
            <Typography
              sx={{
                fontSize: '0.75rem',
                color: '#9CA3AF',
                mt: 0.5,
              }}
            >
              {userData.phone} {userData.companyName && `• ${userData.companyName}`}
              {userData.isAgency && ` • ${userData.isAgency === 'yes' ? 'Agency' : 'Individual'}`}
            </Typography>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: '#fff',
          px: 3,
          py: 2.5,
          borderBottom: '1px dashed #E5E7EB',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.88rem',
            color: '#374151',
            lineHeight: 1.7,
          }}
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </Typography>
      </Box>
    </Container>
  );
}