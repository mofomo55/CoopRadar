import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  standalone: true,
  templateUrl: './company-list.html',
  styleUrl: './company-list.css'
})
export class CompanyListPage {
  constructor(public readonly companyService: CompanyService) {}
}
