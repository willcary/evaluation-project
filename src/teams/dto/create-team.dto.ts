import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
// **Using Max/Min values creeating module import error**
// import { Max, Min } from 'class-validator/types/decorator/decorators';

export class CreateTeam {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  // @Min(1)
  // @Max(500)
  numMembers: number;

  @ApiProperty()
  @IsInt()
  // @Min(0)
  // @Max(50)
  numCoaches: number;
}
