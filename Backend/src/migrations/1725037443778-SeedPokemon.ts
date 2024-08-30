import { MigrationInterface, QueryRunner } from "typeorm";

  export class SeedPokemon1725037443778 implements MigrationInterface {
      public async up(queryRunner: QueryRunner): Promise<void> {
        // elimina los registros existentes (si existen)
        await queryRunner.query(`
          DELETE FROM pokemon WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5', 'pokemon-6');
        `);
  
        //inserta los datos
        await queryRunner.query(`
          INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl)
          VALUES
          ('pokemon-1', 'Pikachu', 4, 3, 3, 6, 'Electric', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
          ('pokemon-2', 'Charmander', 4, 3, 3, 4, 'Fire', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
          ('pokemon-3', 'Squirtle', 3, 4, 3, 3, 'Water', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
          ('pokemon-4', 'Bulbasaur', 4, 3, 3, 3, 'Grass', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
          ('pokemon-5', 'Eevee', 4, 3, 4, 5, 'Normal', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png')
          ('pokemon-6', 'Hitmonchan', 4, 3, 3, 6, 'Figth', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/107.png')
        `);
      }
  
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          DELETE FROM pokemon WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5', 'pokemon-6');
        `);
      }
  }  
