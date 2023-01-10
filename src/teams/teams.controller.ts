import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
// import { Team } from './types/types';

@ApiTags('teams')
@Controller('api')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get('teams')
  getTeams(): any {
    return this.teamsService.findAll();
  }

  @Get('team/:id')
  getTeamById(@Param('id') id: string): any {
    // TODO: auto parse
    return this.teamsService.findById(Number(id));
  }
}
