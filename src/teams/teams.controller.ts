import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Team } from './entities/team.entity';
import { CreateTeam } from './dto/create-team.dto';
import { TeamsService } from './teams.service';

@ApiTags('teams')
@Controller('api')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @ApiOkResponse({
    type: Team,
    isArray: true,
    description: 'get all teams',
  })
  @Get('teams')
  getTeams(): any {
    return this.teamsService.findAll();
  }

  @ApiOkResponse({ type: Team, description: 'get specific team' })
  @Get('team/:id')
  getTeamById(@Param('id') id: string): any {
    return this.teamsService.findById(Number(id));
  }

  @ApiCreatedResponse({ type: Team, description: 'post a new team' })
  @Post('teams')
  createTeam(@Body() body: CreateTeam): any {
    return this.teamsService.createTeam(body);
  }
}
