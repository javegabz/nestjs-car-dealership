import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [];

    findAll() {
        return this.cars;
    }  

    getAllCars() {
        return this.cars;
    }

    getCarById(id: string) {
        return this.cars[id];
    }

    findCarById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`)
        }
        return car;
    }

    create (createCarDto: CreateCarDto) {
        const car = {
            id: uuidv4(),
            ...createCarDto
        };
        this.cars.push(car);
        return car;
    }

    update (id: string,updateCarDto: UpdateCarDto) {
        const car = this.findCarById(id);
        Object.assign(car, updateCarDto);
        return car;
    }

    deleteCar(id: string) { 
        this.findCarById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return { message: `Car with id ${id} deleted successfully` };
    }

    fillCarsWithSeedData(cars: Car[]) {                 
        this.cars = cars;
    }

}
