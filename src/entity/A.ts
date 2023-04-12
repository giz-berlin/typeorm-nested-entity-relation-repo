import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { B } from './B'

@Entity()
export class A {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column(() => B)
    b!: B
}
