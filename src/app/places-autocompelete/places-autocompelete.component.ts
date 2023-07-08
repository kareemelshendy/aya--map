import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-places-autocompelete',
  templateUrl: './places-autocompelete.component.html',
  styleUrls: ['./places-autocompelete.component.css'],
})
export class PlacesAutocompeleteComponent {
  @ViewChild('inputField') inputField!: ElementRef;
  placeholder: string = 'enter location';
  autocomplete: google.maps.places.Autocomplete | undefined;

  constructor() {}

  ngAfterViewInit() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.inputField.nativeElement
    );
    this.autocomplete.addListener('place_changed', () => {
      console.log('changes')
      const place = this.autocomplete?.getPlace();
      console.log(place);
    });
  }
}
