import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/entity/Category.entity';
import { Item } from 'src/items/entity/Item.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
@Entity()
export class List {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  // @Column()
  // color: string;

  @ApiProperty()
  @Column()
  isDone: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @VersionColumn()
  version: number;

  @ManyToOne(() => Category, (category) => category.lists, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @OneToMany(() => Item, (item) => item.list, { eager: true })
  items: Item[];
}
