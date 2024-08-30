import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {

    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    findAll(): Promise<Pokemon[]>{
        return this.pokemonService.findall();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Pokemon>{
        return this.pokemonService.findById(id);
    }
}
