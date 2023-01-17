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
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTeam, Team } from './schemas/schemas';
import { TeamsService } from './teams.service';
// import { Team } from './types/types';

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
  @ApiNotFoundResponse()
  @Get('team/:id')
  getTeamById(@Param('id', ParseIntPipe) id: number): Team {
    const team = this.teamsService.findById(Number(id));

    if (!team) {
      throw new UnprocessableEntityException();
    }

    return team;
  }

  @ApiCreatedResponse({ type: Team, description: 'post a new team' })
  @ApiBadRequestResponse()
  @Post('teams')
  createTeam(@Body() body: CreateTeam): any {
    return this.teamsService.createTeam(body);
  }
}
