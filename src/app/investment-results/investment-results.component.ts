import { Component, computed, inject, input, Input } from '@angular/core';
import { AnnualData } from '../model/investment.model';
import { CurrencyPipe } from '@angular/common';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  calculatorService = inject(CalculatorService);

  results =  this.calculatorService.annualData.asReadonly();
}
