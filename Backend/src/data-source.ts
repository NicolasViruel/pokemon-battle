import { DataSource } from 'typeorm';
import { Pokemon } from './pokemon/pokemon.entity';
import { Battle } from './battle/battle.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon.db',
  entities: [Pokemon, Battle],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});