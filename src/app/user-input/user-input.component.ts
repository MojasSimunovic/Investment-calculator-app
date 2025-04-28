import { Component, EventEmitter, inject, Output, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Investment } from '../model/investment.model';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(0);
  duration = signal(0);

  investment!: Investment;

  calculatorService = inject(CalculatorService);

  onSubmit() {
    this.investment = {
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    }
    this.calculatorService.calculateInvestmentResults(this.investment);
    this.investment = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    }
  }
}
