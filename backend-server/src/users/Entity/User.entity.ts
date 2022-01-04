/* eslint-disable prettier/prettier */
import {
  BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
  } from 'typeorm';

  import * as bcrypt from 'bcrypt';

  // import { Exclude } from 'class-transformer';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    username: string;

    @Column()
    mail: string;
  
    // @Exclude()
    @Column()
    password: string;

    @Column()
    salt: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    @DeleteDateColumn()
    deleted_at: Date;
  
    @VersionColumn()
    version: number;

    // // @BeforeInsert()
    // async setPassword(password: string) {
    //   // random string for salt
    //   const salt = await bcrypt.genSalt();
    //   // hash password
    //   this.password = await bcrypt.hash(password || this.password, salt);
    // }

    // generate random string for sal, that gets saved in the db
    async genSalt(): Promise<string>{
      return bcrypt.genSalt()
    }

    // hash password
    async hashPassowrd(password: string, salt: string): Promise<string> {
      return bcrypt.hash(password, salt);
    }

    // vergleich has
    async validatePassword(password: string): Promise<boolean> {
      const hash = await bcrypt.hash(password, this.salt); 
      return hash === this.password;
    }
  }
  