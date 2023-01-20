import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Team } from './entities/team.entity';
import { CreateTeam } from './dto/create-team.dto';
import { TeamsService } from './teams.service';
// import { Team } from './types/types';

@ApiTags('Teams')
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
  @ApiUnprocessableEntityResponse()
  @Get('team/:id')
  getTeamById(@Param('id', ParseIntPipe) id: number): Team {
    const team = this.teamsService.findById(Number(id));

    if (!team) {
      throw new UnprocessableEntityException();
    }

    return team;
  }

  @ApiCreatedResponse({ type: Team, description: 'post a new team' })
  @ApiUnprocessableEntityResponse()
  @Post('teams')
  createTeam(@Body() body: CreateTeam): any {
    return this.teamsService.createTeam(body);
  }
}
