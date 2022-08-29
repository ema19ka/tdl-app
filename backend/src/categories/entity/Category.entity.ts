import { ApiProperty } from '@nestjs/swagger';
import { List } from 'src/lists/entity/List.entity';
import { User } from 'src/users/entity/User.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Category {
  @ApiProperty()
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  color: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @VersionColumn()
  version: number;

  @ManyToOne(() => User, (user) => user.category, { cascade: true })
  user: User;

  @OneToMany(() => List, (list) => list.category, { eager: true })
  lists: List[];
}
