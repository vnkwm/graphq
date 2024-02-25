import jwt from "jsonwebtoken";
import { getUserByEmail } from "./db/users.js";
import { expressjwt } from "express-jwt";

const secret = Buffer.from("Zn8Q5tyZ/GIMHltc4F/gTkVJMlrbKiZt", "base64");

export const authMiddleware = expressjwt({
  algorithms: ["HS256"],
  credentialsRequired: false,
  secret,
});

export const handleLogin = async (req, res) => {
  console.log('auth is', req?.auth);
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user || user.password !== password) {
    res.sendStatus(401);
  } else {
    const claims = { sub: user.id, email: user.email };
    const token = jwt.sign(claims, secret);
    res.json({ token });
  }
};