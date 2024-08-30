import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './battle.entity';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  imports: [TypeOrmModule.forFeature([Battle]),
  PokemonModule],
  providers: [BattleService],
  controllers: [BattleController]
})
export class BattleModule {}
