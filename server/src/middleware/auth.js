import jwt from 'jsonwebtoken';
const JWT_SECRET = 'your_jwt_secret';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log("Auth header:", authHeader);
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  console.log("Token extracted:", token);
  if (!token) return res.status(401).json({ message: 'Invalid token format' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Decoded token:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(401).json({ message: 'Token expired or invalid' });
  }
};

