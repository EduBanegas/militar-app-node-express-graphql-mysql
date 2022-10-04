import { AppDataSource } from '../../../config/db.config'
import { Country, TypeDocument } from '../../../models'
import { contries, typeDocument } from '../../../data'
import { ImportData } from '../typeDefs/importData'

export const IMPORT_DATA = {
  type: ImportData,
  async resolve() {
    const countriesFound = await Country.find()

    if (countriesFound.length === 0) {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Country)
        .values(contries)
        .execute()
    }

    const typeDocumentsFound = await TypeDocument.find()

    if (typeDocumentsFound.length === 0) {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(TypeDocument)
        .values(typeDocument)
        .execute()
    }
  }
}
