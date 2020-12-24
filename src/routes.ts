import { Router } from 'express'

import authMiddleware from './middlewares/AuthMiddleware'
import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'

const router = Router()

router.get('/', authMiddleware, UserController.index)

router.post('/', UserController.store)
router.post('/auth', AuthController.authenticate)

router.delete('/', UserController.deleteUser)

export default router
