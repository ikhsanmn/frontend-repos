import { useRouter } from 'next/router';
import { Button, Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const router = useRouter();

  const handleMainNavigation = () => {
    router.push('/');
  };

  return (
    <div>
      <LoginForm />
      <Button variant="contained" color="primary" onClick={handleMainNavigation}>
        Back to Main Page
      </Button>
    </div>
  );
};

export default LoginPage;
