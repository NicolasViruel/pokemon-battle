import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService implements OnModuleInit {
    async onModuleInit() {
        await this.seedPokemon(); 
    }
    
    
    constructor(
        @InjectRepository(Pokemon)
        private pokemonRepository: Repository<Pokemon>,
    ) {}

    async seedPokemon() {
        const pokemons = [
            {
                "id": "pokemon-1",
                "name": "Pikachu",
                "attack": 4,
                "defense": 3,
                "hp": 3,
                "speed": 6,
                "type": "Electric",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
              },
              {
                "id": "pokemon-2",
                "name": "Charmander",
                "attack": 4,
                "defense": 3,
                "hp": 3,
                "speed": 4,
                "type": "Fire",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
              },
              {
                "id": "pokemon-3",
                "name": "Squirtle",
                "attack": 3,
                "defense": 4,
                "hp": 3,
                "speed": 3,
                "type": "Water",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
              },
              {
                "id": "pokemon-4",
                "name": "Bulbasur",
                "attack": 4,
                "defense": 3,
                "hp": 3,
                "speed": 3,
                "type": "Grass",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
              },
              {
                "id": "pokemon-5",
                "name": "Eevee",
                "attack": 4,
                "defense": 3,
                "hp": 4,
                "speed": 5,
                "type": "Normal",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
              }
            ]

            for (const pokemon of pokemons){
                await this.pokemonRepository.save(pokemon);
            }

    }

    findall(): Promise<Pokemon[]> {
        return this.pokemonRepository.find();
    }

    findById(id: string): Promise<Pokemon> {
      return this.pokemonRepository.findOne({ where: { id } });
  }

}
