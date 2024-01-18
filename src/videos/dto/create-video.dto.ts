import {Length, IsNotEmpty, IsUrl} from 'class-validator'
//add validators in DTO.

export class CreateVideoDto {
    @IsNotEmpty()
    @Length(1,15)
    title:string;
    @IsNotEmpty()
    @Length(1,15)
    description:string;
    @IsNotEmpty()
    @IsUrl()
    src:string;
}
