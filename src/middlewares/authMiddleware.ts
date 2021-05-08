import { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers["authorization"];
  const token = authorization && authorization.split(" ")[1];

  if (token === null) {
    return res.json({
      code: 401,
      message: "Oops! It look like you're not logged in. Please sign in!"
    }).sendStatus(401);

  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        return res.status(403).json({code: 403, message: "Invalid token."});
      } else {
        next();
      }
    });
  }
};

export default authenticate;