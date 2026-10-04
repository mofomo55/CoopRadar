import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InformationBoxComponent } from '../../../../shared/components/information-box/information-box';

@Component({
  selector: 'app-about-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InformationBoxComponent],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutPage {
  readonly informationBoxes = [
    {
      title: 'Apartment search in minutes',
      text: 'MyGEWO searches the listings of non-profit housing developers every minute. New cooperative apartments appear immediately – filterable by location, price, size and number of rooms.',
      iconPath: 'M12 7v5l3 2m5-2a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
      actionLabel: 'Looking for apartments',
      actionLink: '/apartments'
    },
    {
      title: 'Non-profit new construction projects',
      text: 'Many subsidized apartments are allocated before construction is even complete. The map shows you where construction is underway and where you can register your interest.',
      iconPath: 'M3 21h18M5 21V7l8-4v18m6 0V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01M14 9v.01M14 12v.01M14 15v.01M14 18v.01',
      actionLabel: 'Discover new construction projects',
      actionLink: '/apartments'
    },
    {
      title: 'All non-profit housing developers',
      text: 'The list of property developers shows you the non-profit property developers throughout Austria and leads you to their current housing offers.',
      iconPath: 'M8 11 12 7a3 3 0 0 1 4 0l4 4a2 2 0 0 1-3 3l-2-2m-7-1-2-2a2 2 0 0 0-3 3l5 5a3 3 0 0 0 4 0l2-2m-8-8 2-2a3 3 0 0 1 4 0l1 1m-8 9 2-2m1 4 2-2m1 3 2-2',
      actionLabel: 'View list of developers',
      actionLink: '/companies'
    },
    {
      title: 'App with instant notifications',
      text: 'With the MyGEWO app for iOS and Android, you can instantly find out about new apartments – filtered by location, number of rooms, area and price.',
      iconPath: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 13h4',
      actionLabel: 'To the app',
      actionLink: '/app'
    }
  ];
}
