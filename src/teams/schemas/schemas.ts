import { ApiProperty } from '@nestjs/swagger';

export class Team {
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  numMembers: number;

  @ApiProperty()
  numCoaches: number;
}
export class CreateTeam {
  @ApiProperty()
  name: string;

  @ApiProperty()
  numMembers: number;

  @ApiProperty()
  numCoaches: number;
}
