import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  url = `${environment.api}getUsers`;

  headings = [
    {fieldName: 'uid', display: 'ID', type: 'number', minWidth: '160px', maxWidth: '160px', width: '12.25%', filter: true,
      disableSorting: true},
    {fieldName: 'first_name', display: 'First Name', type: 'url', minWidth: '160px', maxWidth: '160px', width: '12.25%',
      other: {openTab: true, urlTemplate: '/detail/:uid', queryParams: {myEmail: 'email'}}, filterType: 'tag'},
    {fieldName: 'email', display: 'Email', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%'},
    {fieldName: 'gender', display: 'Gender', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%',
      filterType: 'multi-select',
      other: {
        selectionMode: 'single',
        source: 'internal',
        url: 'gender',
        optionsObject: [
          {text : 'Female', value: 'FEMALE'},
          {text : 'Male', value: 'MALE'}
        ],
        stringList: true
      }
    },
    {fieldName: 'date_of_birth', display: 'Date Of Birth', type: 'date', minWidth: '160px', maxWidth: '160px', width: '12.25%'},
    {fieldName: 'ip_address', display: 'IP Address', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%'},
    {fieldName: 'car', display: 'Car', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%'},
    {fieldName: 'phone', display: 'Phone', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%'},
    {fieldName: 'movie_taste', display: 'Movie Taste', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'country', display: 'Country', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%',
      filterType: 'multi-select',  show: true,
      other: {
        selectionMode: 'multiple',
        source: 'external',
        url: `${environment.api}countries`,
        key: 'displayName',
        value: 'value',
        stringList: true
      }
    },
    {fieldName: 'city', display: 'City', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'company', display: 'Company', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'iban', display: 'Iban', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'latitude', display: 'Latitude', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'longitude', display: 'Longitude', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'currency', display: 'Currency', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'username', display: 'Username', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'profession', display: 'Profession', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
    {fieldName: 'state', display: 'State', type: 'string', minWidth: '160px', maxWidth: '160px', width: '12.25%', show: false},
  ];

  responseReceived(data): void {
    console.log(data);
  }

  selectionChanged(data): void {
    console.log(data);
  }

  filtersChanged(data): void {
    console.log(data);
  }
}