import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../database/models/User'

class UserController {
  async store(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User)
      const { email, password } = req.body

      const isRegistered = await userRepository.findOne({
        where: { email: email }
      })
      if (isRegistered) return res.sendStatus(409)

      //Password has generation is done inside the users table model
      const userCreated = userRepository.create({ email, password })
      await userRepository.save(userCreated)

      return res.sendStatus(201)
    } catch {
      return res.sendStatus(500)
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User)
      const { email } = req.body

      const isRegistered = await userRepository.findOne({
        where: { email: email }
      })

      if (!isRegistered) return res.sendStatus(404)
      await userRepository.delete({ email: email })

      return res.sendStatus(200)
    } catch {
      return res.sendStatus(500)
    }
  }

  async index(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User)
      const data = await userRepository.find()
      return res.status(200).json(data)
    } catch {
      return res.sendStatus(500)
    }
  }
}

export default new UserController()
