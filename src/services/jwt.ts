import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../config/env.config'

export const getToken = (payload: any) => {
  return jwt.sign(
    {
      data: payload
    },
    String(JWT_SECRET_KEY),
    { expiresIn: '10d' }
  )
}

export const getTokenData = (token: any) => {
  let data = null

  jwt.verify(token, String(JWT_SECRET_KEY), (err: any, decoded: any) => {
    if (err) {
      console.log('Error al obtener data del token')
    } else {
      data = decoded.data
    }
  })

  return data
}
