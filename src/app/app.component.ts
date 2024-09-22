import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Create a 2D array for the seats, with each seat having a number and availability status
  seatsArray = [
    [
      { number: 1, status: 'available' },
      { number: 2, status: 'available' },
      { number: 3, status: 'available' },
      { number: 4, status: 'available' },
      { number: 5, status: 'available' },
      { number: 6, status: 'available' },
      { number: 7, status: 'available' },
    ],
    [
      { number: 8, status: 'available' },
      { number: 9, status: 'available' },
      { number: 10, status: 'booked' },
      { number: 11, status: 'available' },
      { number: 12, status: 'available' },
      { number: 13, status: 'available' },
      { number: 14, status: 'available' },
    ],
    // Repeat the same pattern for all rows, with some seats already booked
    [
      { number: 15, status: 'available' },
      { number: 16, status: 'available' },
      { number: 17, status: 'available' },
      { number: 18, status: 'available' },
      { number: 19, status: 'available' },
      { number: 20, status: 'available' },
      { number: 21, status: 'booked' },
    ],
    // Continue for the rest of the rows until row 11
    [
      { number: 78, status: 'available' },
      { number: 79, status: 'available' },
      { number: 80, status: 'available' },
    ], // The last row with 3 seats
  ];

  seatRequest: number = 0; // Variable to store the number of seats the user wants to book

  // Function to request seats
  requestSeats() {
    let bookedSeats = [];
    // Loop through the seat array to find available seats in the same row
    for (let row of this.seatsArray) {
      let availableSeats = row.filter((seat) => seat.status === 'available');
      if (availableSeats.length >= this.seatRequest) {
        bookedSeats = availableSeats.slice(0, this.seatRequest);
        break;
      }
    }

    // If seats are found, mark them as booked
    if (bookedSeats.length > 0) {
      bookedSeats.forEach((seat) => (seat.status = 'booked'));
      alert(
        'Seats booked: ' + bookedSeats.map((seat) => seat.number).join(', ')
      );
    } else {
      alert('Not enough seats available in one row');
    }
  }
}
