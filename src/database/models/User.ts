import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate
} from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column() // Default value 'varchar'
  email: string

  @Column()
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)
  }
}

export default User
