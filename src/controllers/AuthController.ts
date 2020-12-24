import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

import User from '../database/models/User'

const privateKey = process.env.PRIVATE_KEY || 'jwtsecretkey'

class Authentication {
  async authenticate(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User)
      const { email, password } = req.body

      const user = await userRepository.findOne({ where: { email: email } })
      const isValidPassword = bcrypt.compare(password, user.password)
      if (!user || !isValidPassword) return res.sendStatus(401)

      /* Generating jwt token */
      const token = jwt.sign(
        { id: user.id, email: user.email, password: user.password },
        privateKey,
        {
          expiresIn: '20m',
          algorithm: 'RS256'
        }
      )

      return res.json({ token })
    } catch {
      return res.sendStatus(500)
    }
  }
}

export default new Authentication()
