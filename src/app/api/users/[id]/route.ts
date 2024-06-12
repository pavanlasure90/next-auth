import { NextApiRequest, NextApiResponse } from 'next';
import connect from '@/utils/db';
import User from '@/models/User';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();

  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const user = await User.findById(id);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
      case 'DELETE':
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
