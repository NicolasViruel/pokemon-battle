import { Body, Controller, Post } from '@nestjs/common';
import { BattleService } from './battle.service';

@Controller('battle')
export class BattleController {

    constructor(private readonly battleService: BattleService) {}

    @Post()
    battle(@Body() body:{ pokemon1Id: string, pokemon2Id: string} ){
        return this.battleService.battle(body.pokemon1Id, body.pokemon2Id)
    }

}
