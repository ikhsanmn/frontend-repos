import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Button, Typography } from '@mui/material';

const UpdateButton = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const [status, setStatus] = useState('');

  const handleUpdate = async () => {
    if (!isAuthenticated) {
      setStatus('Unauthorized');
      return;
    }

    try {
      const response = await fetch('/api/update', {
        method: 'POST',
      });

      if (response.ok) {
        setStatus('Data updated successfully');
      } else {
        setStatus('Failed to update data');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Backend Button
      </Button>
      {status && <Typography variant="body1">{status}</Typography>}
    </>
  );
};

export default UpdateButton;
