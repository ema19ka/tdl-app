/* eslint-disable prettier/prettier */
// import * as bcrypt from 'bcrypt';

import { Category } from 'src/categories/entity/Category.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
  } from 'typeorm';



  // import { Exclude } from 'class-transformer';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    username: string;

    @Column()
    email: string;
  
    // @Exclude()
    @Column()
    password: string;

    // @Column()
    // salt: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    @DeleteDateColumn()
    deleted_at: Date;
  
    @VersionColumn()
    version: number;

    @OneToMany(() => Category, category => category.user)
    category: Category [];


    // // @BeforeInsert()
    // async setPassword(password: string) {
    //   // random string for salt
    //   const salt = await bcrypt.genSalt();
    //   // hash password
    //   this.password = await bcrypt.hash(password || this.password, salt);
    // }

    // // generate random string for sal, that gets saved in the db
    // async genSalt(): Promise<string>{
    //   return bcrypt.genSalt()
    // }

    // // hash password
    // async hashPassowrd(password: string, salt: string): Promise<string> {
    //   return bcrypt.hash(password, salt);
    // }

    // // vergleich has
    // async validatePassword(password: string): Promise<boolean> {
    //   const hash = await bcrypt.hash(password, this.salt); 
    //   return hash === this.password;
    // }
  }
  