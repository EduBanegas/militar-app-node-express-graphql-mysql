import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { User } from './user'
import { TypeDocument } from './typeDocument'

@Entity()
export class UserDocument extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(type => User, { eager: true, nullable: false })
  @JoinColumn()
  user: number

  @Column({ type: 'varchar', length: 20, unique: true })
  document: string

  @ManyToOne(type => TypeDocument, typeDocument => typeDocument.userDocuments, {
    eager: true,
    nullable: false
  })
  typeDocument: TypeDocument

  @Column({ type: 'varchar', length: 60 })
  placeExpedition: string

  @Column({ type: 'date' })
  dateExpedition: Date
}
