import { Pokemon } from "src/pokemon/pokemon.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Battle{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Pokemon)
    pokemon1: Pokemon;

    @ManyToOne(() => Pokemon)
    pokemon2: Pokemon;

    @Column()
    winner: string;

    @Column()
    log: string

}