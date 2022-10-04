import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Country } from './country'
import { User } from './user'

@Entity()
export class ContactInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(type => User, { eager: true, nullable: false })
  @JoinColumn()
  user: number

  @Column({ type: 'varchar', length: 60 })
  address: string

  @ManyToOne(type => Country, country => country.cantactsInfo, {
    eager: true,
    nullable: false
  })
  country: Country

  @Column({ type: 'varchar', length: 50 })
  city: string

  @Column({ type: 'varchar', length: 20 })
  phone: string

  @Column({ type: 'varchar', length: 20 })
  celPhone: string

  @Column({ type: 'varchar', length: 100 })
  emergencyName: string

  @Column({ type: 'varchar', length: 20 })
  emergencyPhone: string
}
