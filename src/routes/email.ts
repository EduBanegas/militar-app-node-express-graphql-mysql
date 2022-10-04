import { getTokenData } from './../services/jwt'
import express from 'express'
import { User } from '../models'

const router = express.Router()

router.get('/confirm/:token', async (req, res, next) => {
  try {
    const { token } = req.params

    const data = getTokenData(token)

    if (data === null) throw new Error('Error getting token data')

    const { email, code } = data

    const userFound = await User.findOneBy({ email })

    if (userFound == null) throw new Error("User doesn't exist")

    if (code !== userFound.verificationToken) res.redirect('/error.html')

    // Update User
    userFound.emailVerified = true
    userFound.save()

    res.redirect('/confirm.html')
  } catch (error) {
    next(error)
  }
})

export default router
