import { Test, TestingModule } from '@nestjs/testing';
import { Team } from './entities/team.entity';
import { TeamsService } from './teams.service';

describe('TeamsService', () => {
  let service: TeamsService;
  const mockTeamsService = {
    findAll: jest.fn(),
    findById: jest.fn(),
    createTeam: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamsService],
    })
      .overrideProvider(TeamsService)
      .useValue(mockTeamsService)
      .compile();

    service = module.get<TeamsService>(TeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should get all teams in storage', () => {
    service.findAll();
    expect(mockTeamsService.findAll).toHaveBeenCalled();
  });

  it('Should get a specific user by id', () => {
    service.findById(0);
    expect(mockTeamsService.findById).toHaveBeenCalledWith(0);
  });

  it('should create a team and return team with id', () => {
    const team: Team = { name: 'Chipmunks', numMembers: 44, numCoaches: 5 };
    expect(mockTeamsService.createTeam(team)).toEqual({
      id: expect.any(Number),
      name: 'Chipmunks',
      numMembers: 44,
      numCoaches: 5,
    });
  });

  // it('should throw error', () => {
  //   const team: Team = { name: 'Chipmunks', numMembers: 44, numCoaches: 5 };
  //   expect(mockTeamsService.createTeam(team)).toEqual({
  //     id: expect.any(Number),
  //     name: 'Chipmunks',
  //     numMembers: 44,
  //     numCoaches: 5,
  //   });
  // });
});
