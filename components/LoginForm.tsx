import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../store/reducers';
import { auth } from '../apis/userApis';
import { Button, TextField, Box, Typography } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Unauthorized: Email and password are required');
      return;
    }

    dispatch(loginRequest());
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(loginSuccess());
      setError(''); // Clear error on successful login
    } catch (error) {
      dispatch(loginFailure(error.message));
      setError('Unauthorized: ' + error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
    </Box>
  );
};

export default LoginForm;
