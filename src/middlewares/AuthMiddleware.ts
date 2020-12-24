import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { ITokenPayload } from '../interfaces/ITokenPayload'

const public_key = process.env.PUBLIC_KEY || 'jwtsecretkey'

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, public_key)
    const { id } = data as ITokenPayload
    req.userId = id

    next()
  } catch {
    return res.sendStatus(401)
  }
}
