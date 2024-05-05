# Project requirements

1. Homepage should contain a slider component displaying events that are currently being executed.
2. Homepage should contain a component where 3 events that are closest to the current moment in time should be displayed.
3. Homepage should contain a calendar component on which the days of the current month are displayed, and days at which events are going to take place should be marked with a special style.
4. Website should include a page where all events (current, future and past) are displayed in separate sections.
5. Users can see all events and their information without having to log in.
6. Users should log in to be able to reserve a seat at an event. (later...)
7. Users should be able to see all events for which they have made reservations in a separate page. (later...)
8. Users should log in and should have administrator privilages to be able to register an event. (later...)
9. Users should be able to set some configuration/settings regarding the appearance and functionality of the website. (later...)

# Features

1. Events
2. User (later...)
3. Products (later...)

# Pages

1. `/`
2. `/events`
3. `/reservations` (later...)
4. `/products` (later...)

# Technology stack

1. React Query: global remote state management (in progress)
2. Context API for global UI state management
3. Styled Components for styling the application (done)
4. React navigation (done)
5. React Hook Form for form data handling
6. React Hot Toast for notifications

As of `4 may 2024`

# State structure

## Events

Events will be a global remote state that will be available to all features throughout the whole application.

```json
[
  {
    "id": "unique identifier of the event",
    "title": "title of the event",
    "startDate": "the date on which the event starts",
    "endDate": "the date on which the event ends",
    "startTime": "the time of day at which the event starts",
    "endTime": "the time of day at which the event ends",
    "exeType": "can be either 'physical' or 'online'",
    "maxCapacity": "determines the amount of people that can be present in the event",
    "registrationFee": "the price that a user has to pay in order to make a reservation - can be 0 or any other amount",
    "discount": "the discount percentage set by event officials",
    "poster": "event poster image file"
  }
]
```

## Users

```json
{
  "id": "unique identifier of the user",
  "email": "email address of the user",
  "phone": "phone number of the user"
}
```

## Reservations

```json
[
  {
    "id": "unique identifier of the reservation",
    "eventId": "the date on which the event starts", // foreign key
    "userId": "the date on which the event ends" // foreign key
  }
]
```

## Settings

```json

```
