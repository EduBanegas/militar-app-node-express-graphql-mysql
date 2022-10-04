import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { ContactInfo } from './contactInfo'

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 4, unique: true })
  countryCode: string

  @Column({ type: 'varchar', length: 100, unique: true })
  countryName: string

  @OneToMany(type => ContactInfo, contactInfo => contactInfo.country)
  cantactsInfo: ContactInfo[]
}
