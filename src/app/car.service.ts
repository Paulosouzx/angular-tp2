import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: any[] = []; // Array para armazenar os automóveis

  constructor() {}

  getCars() {
    return this.cars;
  }

  addCar(car: any) {
    this.cars.push(car);
  }
}
