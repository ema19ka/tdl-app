/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';

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
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ApiProperty()
    @Column()
    username: string;

    @ApiProperty()
    @IsEmail()
    @Column({ unique: true})
    email: string;
  
    @ApiProperty()
    @Exclude()
    @Column()
    password: string;

    @Exclude()
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

    @OneToMany(() => Category, category => category.user, { eager: true })
    category: Category [];


    async genSalt(): Promise<string> {
      return bcrypt.genSalt();
    }

    async hashPassword(password: string, salt: string): Promise<string> {
      return bcrypt.hash(password, salt);
    }

    async validatePassword(password: string): Promise<boolean> {
      // hash password
      const hash = await bcrypt.hash(password, this.salt);
      return hash === this.password;
    }

  }
  