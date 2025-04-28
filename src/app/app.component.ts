import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AnnualData, Investment } from './model/investment.model';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {

  calculator = inject(CalculatorService);
  annualData =  signal<AnnualData[] | undefined>(undefined);
  onShow(investmentObj: Investment) {
    this.annualData.update(() => this.calculator.calculateInvestmentResults(investmentObj));
  }
}
