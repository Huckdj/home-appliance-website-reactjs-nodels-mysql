import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/auth.js';

export default function verifyUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.json({ Error: 'You not authen' });
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.json({ Error: 'Token is not okey' });
    req.tentaikhoan = decoded.tentaikhoan;
    req.idtaikhoan = decoded.idtaikhoan;
    req.email = decoded.email;
    req.Role = decoded.Role;
    next();
  });
}
