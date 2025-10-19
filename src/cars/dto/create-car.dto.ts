import { IsString, IsNotEmpty, IsInt, Min, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';




export class CreateCarDto {
    @IsString({ message: 'Brand must be a string' })
    @IsNotEmpty({ message: 'Brand is required' })
    readonly brand: string;

    @IsString({ message: 'Model must be a string' })
    @IsNotEmpty({ message: 'Model is required' })
    readonly model: string;

    @IsNumber({}, { message: 'Year must be a number' })
    @Min(1900, { message: 'Year must be >= 1900' })
    @IsNotEmpty({ message: 'Year is required' })
    readonly year: number;
}