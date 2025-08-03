//@ts-nocheck
import jwt from "jsonwebtoken";

export function generateToken(user) {
    return jwt.sign(user, process.env.SECRET_KEY);
}

export function verifyToken(token){
    return jwt.verify(token,process.env.SECRET_KEY)
}