import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('brands')
export class Brand {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({name: 'created_at'})
  createdAt!: Date

  @Column({name: 'updated_at'})
  updatedAt!: Date
}