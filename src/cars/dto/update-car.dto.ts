import { IsString, IsNotEmpty, IsInt, Min, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';




export class UpdateCarDto {

    @IsUUID('4', { message: 'ID must be a valid UUID v4' })
    @IsOptional()
    readonly id?: string;

    @IsString({ message: 'Brand must be a string' })
    @IsOptional()
    readonly brand?: string;

    @IsString({ message: 'Model must be a string' })
    @IsOptional()
    readonly model?: string;

    @IsNumber({}, { message: 'Year must be a number' })
    @Min(1900, { message: 'Year must be >= 1900' })
    @IsOptional()
    readonly year?: number;
}