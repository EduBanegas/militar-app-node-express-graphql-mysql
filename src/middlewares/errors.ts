export const notFound = (req: any, res: any, next: any) => {
  try {
    throw new Error(`Not found - ${req.originalUrl}`)
  } catch (error: any) {
    error.status = 404
    next(error)
  }
}

export const errorHandler = (error: any, req: any, res: any, next: any) => {
  const status = error.status || 500
  const message = error.message

  res.status(status).json({
    msg: message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack
  })
}
