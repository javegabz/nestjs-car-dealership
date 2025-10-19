import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class CarsService {

    private cars: Car[] = [
        { id: uuidv4(),
          brand: 'toyota',
          model: 'Corolla',
          year: 2020 },
        { id: uuidv4(),
          brand: 'honda',
          model: 'Civic',
          year: 2021 },
        { id: uuidv4(),
          brand: 'ford',
          model: 'Focus',
          year: 2019 },
        { id: uuidv4(),
          brand: 'Jeep',
          model: 'Cherokee',
          year: 2019 }
        ];


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
 
}
