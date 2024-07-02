import { useRouter } from 'next/router';
import { Button, Box, Typography } from '@mui/material';

const MainPage = () => {
  const router = useRouter();

  const handleLoginNavigation = () => {
    router.push('/login');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Main Page
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLoginNavigation}>
        Go to Login
      </Button>
    </Box>
  );
};

export default MainPage;
