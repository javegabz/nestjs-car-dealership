import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    readonly brand: string;

    @IsString()
    @IsNotEmpty()
    readonly model: string;

    @IsNumber()
    @Min(1900)
    readonly year: number;
}