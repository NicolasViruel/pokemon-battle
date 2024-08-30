import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Battle } from './battle.entity';
import { Repository } from 'typeorm';
import { Pokemon } from 'src/pokemon/pokemon.entity';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class BattleService {
    constructor(
        @InjectRepository(Battle)
        private battleRepository: Repository<Battle>,
        private pokemonService: PokemonService,
    ){}

    async battle(pokemon1Id: string, pokemon2Id: string): Promise<Battle> {
        const pokemon1 = await this.pokemonService.findById(pokemon1Id);
        const pokemon2 = await this.pokemonService.findById(pokemon2Id);

        if (!pokemon1) {
            throw new NotFoundException(`Pokemon with ID ${pokemon1Id} not found`);
        }
        if (!pokemon2) {
            throw new NotFoundException(`Pokemon with ID ${pokemon2Id} not found`);
        }

        //logica de batalla
        const battleLog = [];
        let first: Pokemon, second: Pokemon;

        if (pokemon1.speed > pokemon2.speed) {
            first = pokemon1;
            second = pokemon2;    
        } else if( pokemon2.speed > pokemon1.speed){
            first = pokemon2;
            second = pokemon1;
        }else{
            first = pokemon1.attack >= pokemon2.attack ? pokemon1 : pokemon2;
            second = first === pokemon1 ? pokemon2 : pokemon1;
        }

        while (pokemon1.hp > 0 && pokemon2.hp > 0) {
            const damage = Math.max(first.attack - second.attack, 1);
            second.hp -=damage;
            battleLog.push(`${first.name} hit ${second.name} for ${damage} damage.`);

            [first, second] = [second, first];
        }

        const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;

        const battle = this.battleRepository.create({
            pokemon1,
            pokemon2,
            winner: winner.name,
            log: battleLog.join('\n'),
        });

        return this.battleRepository.save(battle);
    }

}
