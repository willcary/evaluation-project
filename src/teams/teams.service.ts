import { Injectable } from '@nestjs/common';
import { CreateTeam, Team } from './schemas/schemas';

@Injectable()
export class TeamsService {
  private teams: Team[] = [
    { id: 0, name: 'Manchester United', numMembers: 22, numCoaches: 3 },
    { id: 1, name: 'Liverpool FC', numMembers: 25, numCoaches: 4 },
  ];

  findAll() {
    return this.teams;
  }

  findById(teamId: number) {
    return this.teams.find((team) => team.id === teamId);
  }

  createTeam(createTeam: CreateTeam): Team {
    const newTeam = { id: Date.now(), ...createTeam };
    this.teams.push(newTeam);
    return newTeam;
  }
}
