import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InformationBoxComponent } from '../../../../shared/components/information-box/information-box';

@Component({
  selector: 'app-datenschutz-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InformationBoxComponent],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.css'
})
export class DatenschutzPage {
  readonly informationBoxes = [
    {
      number: '1.1',
      title: 'General information — data protection',
      text: 'Protecting your personal data is of great importance to us. We process your personal data exclusively on the basis of applicable legal provisions (GDPR, the Austrian Data Protection Act (DSG), and the Austrian Telecommunications Act (TKG 2021)).'
    },
    {
      number: '1.2',
      title: 'General information — personal data',
      text: 'To provide our online platform and deliver our services, we process information about you referred to as “personal data” or, for the sake of brevity, simply “data.” The term “processing” encompasses any handling of such data, including its collection, storage, use, or deletion.'
    },
    {
      number: '1.3',
      title: 'General information — this privacy policy',
      text: 'This privacy policy provides information regarding the processing of your personal data, as well as the claims and rights to which you are entitled under data protection regulations.'
    },
    {
      number: '1.4',
      title: 'Controller responsible for this website',
      text: 'MVP Software GmbH\nSeitenstettengasse 5/37\n1010 Vienna\nsupport@mygewo.at'
    },
    {
      number: '1.5',
      title: 'Questions and complaints',
      text: 'Should you have any complaints, questions, or suggestions regarding data protection, please feel free to contact us at any time using the contact details provided above.'
    },
    {
      number: '2.1.1',
      title: 'Platform use — data we process',
      text: 'In the context of our website and online services, we process data that you provide to us (e.g., when registering for a user account) as well as data generated through your use of our services (e.g., when setting up a search agent). This includes server logs (for security reasons, our servers record information about who submits requests) and cookies (small text files stored on your device that contain information used to recognize you).'
    },
    {
      number: '2.1.2',
      title: 'Platform use — web server',
      text: 'The web server used to operate our website is technically managed by MVP Software GmbH.'
    },
    {
      number: '2.2.1',
      title: 'Server logs — purpose of processing',
      text: 'When you access our platform, the web server collects usage data (so-called server logs). The collection of this data is necessary to technically facilitate the establishment of a connection to our server and the use of the website. Furthermore, this data is used to defend against and analyze attacks.'
    },
    {
      number: '2.2.2',
      title: 'Server logs — data collected',
      text: 'The following server logs are collected: the hostname and IP address of the accessing computer, the date and time of the request, identification data regarding the browser and operating system used, and the “referrer” URL.'
    },
    {
      number: '2.2.3',
      title: 'Server logs — legal basis',
      text: 'Your data is processed based on our legitimate interest in ensuring the operation of the service and maintaining system security.'
    },
    {
      number: '2.2.4',
      title: 'Server logs — recipients',
      text: 'The web server used to operate our website is technically managed by MVP Software GmbH. In the event of a hacker attack, data from the server logs may be disclosed to law enforcement authorities. No data is shared with third parties beyond this.'
    },
    {
      number: '2.2.5',
      title: 'Server logs — retention',
      text: 'Server logs are stored in a personally identifiable form for a maximum of 4 weeks. The IP address is stored to assist the relevant authorities in investigating and prosecuting security incidents (such as hacking or data breaches).'
    },
    {
      number: '2.3.1',
      title: 'Contacting us — purpose of processing',
      text: 'When you contact us (e.g., via email or our contact form), we process the data you provide (name, subject, text/message) to the extent necessary to handle and process your inquiry.'
    },
    {
      number: '2.3.2',
      title: 'Contacting us — legal basis',
      text: 'Your data is processed for the purpose of taking pre-contractual steps or fulfilling a contractual relationship, or based on our legitimate interest in organizing the response to your inquiry.'
    },
    {
      number: '2.3.3',
      title: 'Contacting us — recipients',
      text: 'Such data is only transmitted if, and to the extent that, the transmission is necessary for responding to your inquiry.'
    },
    {
      number: '2.3.4',
      title: 'Contacting us — retention',
      text: 'We process your data for as long as is necessary to handle your inquiry, and in the event of a follow-up inquiry, for an additional three years after our last contact with you.'
    },
    {
      number: '2.4.1',
      title: 'User account — purpose of processing',
      text: 'A user account is required to use our platform. In connection with this user account, we process all data provided during registration as well as data generated during use (basic and address information, contact details, images, communication data, watchlists, published listings, billing information, and feedback), to the extent necessary for the administration and execution of the contractual relationship.'
    },
    {
      number: '2.4.2',
      title: 'User account — legal basis',
      text: 'Your data is processed for the purpose of fulfilling the contractual relationship entered into with you.'
    },
    {
      number: '2.4.3',
      title: 'User account — recipients',
      text: 'Data is only transmitted if such transmission is necessary for the performance of the contract.'
    },
    {
      number: '2.4.4',
      title: 'User account — retention',
      text: 'We process your data for as long as necessary for the execution and billing of the user relationship. Statutory retention obligations, particularly those under tax law, remain unaffected.'
    },
    {
      number: '2.5.1',
      title: 'Plausible Analytics — purpose and data',
      text: 'We use Plausible Analytics (https://plausible.io) to measure interaction with our online services. This tool operates entirely without the use of cookies, device IDs, local storage, or access to the browser cache. It does not store any information on your device. It is not possible to draw conclusions about your identity. Information collected by Plausible Analytics is not shared with third parties.'
    },
    {
      number: '2.5.2',
      title: 'Plausible Analytics — further information',
      text: 'You can find information on Plausible Analytics features here: https://plausible.io/data-policy'
    },
    {
      number: '2.6.1',
      title: 'Aptabase — purpose and data',
      text: 'We also use Aptabase, a tool provided by Swetrix Limited, Ireland (https://aptabase.com), to measure interaction with our online services. The Aptabase SDK does not collect device-specific identifiers such as device IDs, usernames, or hardware identifiers. Instead, Aptabase generates a unique user identifier on the server, based on a strong hash of the client’s IP address. This identifier is unique to each app and is discarded every 24 hours. No information is stored on your device. It is not possible to draw conclusions about your identity. Information collected by Aptabase is not shared with third parties.'
    },
    {
      number: '2.6.2',
      title: 'Aptabase — further information',
      text: 'You can find details on data collection by Aptabase here: https://aptabase.com/legal/privacy'
    },
    {
      number: '2.7.1',
      title: 'Maps — purpose of processing',
      text: 'To provide a visual representation of the location of property listings, we embed maps on individual detail pages using Leaflet, MapLibre GL JS, and the Leaflet extension “MapLibre GL Leaflet.” The map style and tiles are loaded via the public OpenFreeMap infrastructure; the map data itself is sourced primarily from OpenStreetMap and OpenMapTiles.'
    },
    {
      number: '2.7.2',
      title: 'Maps — data transmitted',
      text: 'When you access a detail page containing a map, your browser establishes a direct connection to the map servers. In this process, technical data—specifically your IP address, the date and time of the request, information about your browser and operating system, and the URL accessed or referrer—may be transmitted to OpenFreeMap or the respective technical infrastructure operators involved.'
    },
    {
      number: '2.7.3',
      title: 'Maps — legal basis',
      text: 'The integration of these maps is based on our legitimate interest in providing a user-friendly way to display the location of listings.'
    },
    {
      number: '2.7.4',
      title: 'Maps — further information',
      text: 'You can find more information on OpenFreeMap (https://openfreemap.org/) and OpenStreetMap (https://www.openstreetmap.org/copyright).'
    },
    {
      number: '2.8',
      title: 'Data transfer and processing on our behalf',
      text: 'For the operation of our platform, we rely on third-party service providers (“data processors”) to carry out tasks. Your personal data is used exclusively by us and will not be shared with third parties without your consent, a legal obligation, or a court or administrative order. If we engage third parties (data processors) to carry out tasks, we ensure that they use your data solely in accordance with the agreement concluded with them, our instructions, and applicable data protection regulations.'
    }
  ];
}
