import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { UserDocument } from './userDocument'

@Entity()
export class TypeDocument extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: '50', unique: true })
  nameTypeDocument: string

  @OneToMany(type => UserDocument, userDocument => userDocument.typeDocument)
  userDocuments: UserDocument[]
}
