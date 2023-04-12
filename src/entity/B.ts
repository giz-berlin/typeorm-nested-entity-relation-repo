import { OneToMany } from "typeorm";
import { C } from './C'

export class B {
    @OneToMany(
        () => C,
        (c: C) => c.a,
        {
            cascade: true,
            eager: true,
        },
    )
    cs!: C[]
}