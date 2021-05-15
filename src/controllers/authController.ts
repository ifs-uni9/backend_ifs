import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export default {
  async store (req: Request, res: Response) {
    const { username } = req.body;

    const token = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);

    return res.status(200).json({code: 200, message: "Successfully logged in!", token});
  }
}