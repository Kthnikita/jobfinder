
import jwt from "jsonwebtoken";
type User={
   id:string
}
export function generateToken(user:User) {
    return jwt.sign(user, process.env.SECRET_KEY as string);
}

export function verifyToken(token:string){
    return jwt.verify(token,process.env.SECRET_KEY as string)
}