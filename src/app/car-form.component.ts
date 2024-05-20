import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent {
  car = { marca: '', modelo: '', km: 0, ano: 0, preco: 0 };

  constructor(private carService: CarService) {}

  addCar() {
    this.carService.addCar(this.car);
    this.car = { marca: '', modelo: '', km: 0, ano: 0, preco: 0 }; // Limpa o formulário após adicionar
  }
}
