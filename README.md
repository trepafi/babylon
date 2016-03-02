# Babylon Test
By Lubert Palacios
*test is 80% completed*

## How the test works?
This solution was made following the `gulp-angular` Yeoman generator with some tweaks due some issues in the latest version

## What I've used
* GulpJS
* AngularJS
* Jade
* Stylus
* Angular Material
* lodash
* MomentJS
* UI-Router (not included in this version of angular)

The application is ready to implement unit and e2e tests using:
* Jasmine
* Karma
* Protactor

At the moment the test are part of the app but what I'd do is to move them to a separate folder. The current specs files are at the same level of any controller/directive

## Services
I've create mock services calling a remote source using [Random User API](https://randomuser.me/api/)
The People service provide random data for Doctors and Patients
All the services work using promises. Every single method returns a promise with the requested data

## Booking logic
All the booking logic is at the `consultation.controller.js`

## Directives
I've created `l-faces` directive to show a person image or a big icon

## MomentJS
I use momentjs to show the next available appointment in two ways
```
in 3 hours
Wed, March 2nd 2016, 12:33:12 pm
```

## Remaining tasks
To complete the test I still need to solve this:

* [ ] Improve styles for doctors list
* [ ] Add attach a photo modal form
* [ ] Add attach a note modal form
* [ ] Add select someone else modal form
* [ ] Make the people's faces clickable
* [ ] Add a loader to wait for date from `Random API`
* [ ] Add funny icons
* [ ] Add health related icons
