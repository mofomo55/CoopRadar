import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InformationBoxComponent } from '../../../../shared/components/information-box/information-box';

@Component({
  selector: 'app-impressum-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InformationBoxComponent],
  templateUrl: './impressum.html',
  styleUrl: './impressum.css'
})
export class ImpressumPage {
  readonly companyInfo = {
    title: 'AlpenNest Digital GmbH',
    text: 'Example company details for demonstration only — not real legal or contact information.\n\nAddress: Musterplatz 8, 5020 Salzburg, Austria\nEmail: kontakt@alpennest.example\nBusiness activity: Development and operation of digital housing services\nCompany register number: FN 000000a (fictional)\nVAT ID: ATU00000000 (fictional)'
  };
}
