import app from './app'
import { PORT } from './config/env.config'
import { AppDataSource } from './config/db.config'
import { IMPORT_DATA } from './graphql/userSchema/mutations/importData'

const main = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Database initialized')

    app.listen(PORT)
    console.log(`Server running on port`, PORT)

    IMPORT_DATA.resolve()
  } catch (error) {
    console.error(error)
  }
}

main()
