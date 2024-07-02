import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../apis/userApis';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = auth.currentUser;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Your update logic here

  res.status(200).json({ message: 'Data updated successfully' });
};
