import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  orderBy: {
    timeCreate: 'DESC'
  }
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 20 })
  lastName: string

  @Column({ type: 'varchar', length: 20 })
  name: string

  @Column({ default: true })
  isMilitar: boolean

  @Column({ type: 'datetime', default: () => 'NOW()' })
  timeCreate: Date

  @Column({ default: true })
  isTemporal: boolean

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @Column({ unique: true })
  email: string

  @Column({ type: 'boolean', default: false })
  emailVerified: boolean

  @Column({ default: 'None' })
  verificationToken: string
}
