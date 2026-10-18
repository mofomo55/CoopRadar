import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InformationBoxComponent } from '../../../../shared/components/information-box/information-box';

@Component({
  selector: 'app-nutzungsbedingungen-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InformationBoxComponent],
  templateUrl: './nutzungsbedingungen.html',
  styleUrl: './nutzungsbedingungen.css'
})
export class NutzungsbedingungenPage {
  readonly informationBoxes = [
    {
      number: '1.2',
      title: 'Scope of these Terms of Use',
      text: 'These Terms of Use apply to all use of the online platform, including both the CoopRadar app and the website.'
    },
    {
      number: '1.3',
      title: 'Changes to these Terms of Use',
      text: 'We reserve the right to amend these terms from time to time to accommodate user requests or changes to our service offerings. The date of the current version can be found at the very top of this document. We will notify you of any changes by sending the updated Terms of Use to the most recent email address you have provided to us. This notification will be sent at least six weeks before the changes take effect. The amended Terms of Use will be deemed accepted unless you terminate your user account before the effective date. At the start of this notice period, we will specifically draw your attention to the implications of your continued use (or failure to terminate your account).'
    },
    {
      number: '2.1',
      title: 'What CoopRadar does',
      text: 'CoopRadar is an online platform for subsidized housing. It assists you in finding your ideal home from among the properties offered by developers. If you are planning to move out, you can also use CoopRadar to find prospective tenants or buyers for your current home.'
    },
    {
      number: '2.2',
      title: 'An independent platform',
      text: 'CoopRadar is an independent platform. We have no partnerships with property developers and receive no commissions or other forms of compensation from them.'
    },
    {
      number: '2.3',
      title: 'Listings and search results',
      text: "Our platform exclusively features properties that are publicly available on developers' own websites, as well as listings posted by other users. We do not provide an exhaustive directory of all property developers or all available properties. Listings are displayed based on the criteria you specify, supplemented by a random selection process; this does not constitute a recommendation."
    },
    {
      number: '2.4',
      title: 'Changes to platform services',
      text: 'We reserve the right to expand the services offered on our platform, implement improvements, or replace existing features with equivalent alternatives.'
    },
    {
      number: '2.5',
      title: 'Availability of the platform',
      text: 'The availability of our platform depends on the operation and load of the internet and the underlying network infrastructure—factors that are, in part, beyond our control. We do not guarantee that our online platform will be accessible at all times, nor that all content will be available continuously. We strive to resolve any platform outages as quickly as possible.'
    },
    {
      number: '2.6',
      title: 'Maintenance and access restrictions',
      text: 'We reserve the right to temporarily restrict access to our platform or its functionality when necessary for maintenance, updates, or to ensure security and system integrity. We will provide advance notice of any extended maintenance periods.'
    },
    {
      number: '3.1',
      title: 'Search filters and search agents',
      text: 'You may refine your search using various filters (such as region, living space, and budget) to suit your personal needs and preferences. You may also set up a "search agent" based on your specific criteria.'
    },
    {
      number: '3.2',
      title: 'How listings are ordered',
      text: 'The order in which property developers and apartments are displayed on our platform is primarily based on the date of the listing—with the most recently published listings appearing at the top—followed by a randomized sequence. Property developers have no influence over their position in the search results.'
    },
    {
      number: '3.3',
      title: 'External developer websites',
      text: "From the search results, you can navigate directly to the respective property developer's website to access further details about an apartment or to register your interest. We have no control over the information provided on those external websites, we do not verify its currency, accuracy, or completeness, nor do we provide any guarantees regarding it."
    },
    {
      number: '3.4',
      title: 'Listings posted by other users',
      text: 'If a search result pertains to an apartment listed by another user, we will display the information provided by that user and facilitate contact with them via our platform. We do not verify the information provided about the apartment for currency, accuracy, or completeness, nor do we provide any guarantees regarding it.'
    },
    {
      number: '3.5',
      title: 'Housing eligibility',
      text: 'You are solely responsible for determining whether you meet the eligibility requirements for any subsidized housing.'
    },
    {
      number: '3.6',
      title: 'Listing dates and availability',
      text: 'In our list of results, we indicate the date on which we first recorded each specific listing. We do not guarantee that any property included in our list of results is still available.'
    },
    {
      number: '3.7',
      title: 'Communications and property allocation',
      text: 'We are not involved in any further communication between you and the property developer or user, nor do we become a party to any contract concluded between you and them regarding the property. For inquiries or information concerning the properties, you must contact the respective developer or user. We are in no way involved in the allocation of the property. We do not act as an agent or a broker.'
    }
  ];
}
