import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min, Max } from 'class-validator';

export class CreateTeam {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(500)
  numMembers: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(50)
  numCoaches: number;
}
