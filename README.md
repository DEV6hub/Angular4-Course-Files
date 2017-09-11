# Angular4-Course-Files
Course files for the Angular 4 course.

### Demos

To run the demo code for a specific module:

```
$ cd demos
$ lesson={directory_name} npm start
```
e.g. 
```
$ lesson=components npm start
```

App server will be available at localhost:8080


### Completed Exercises

To run the completed exercise code for a specific module:

```
$ cd completed
$ exercise={directory_name} npm run exercise
```
e.g. 
```
$ exercise=components npm run exercise
```

### Server

Some modules involve making an async call to a server. This server is available in the following location.

```
$ cd exercise/resources/server
$ node server.js
```

When running, the app will be able to hit the server at localhost:9000. All modules that make async calls rely on the same server.

### Student Code

Throughout the course, students should be writing code within the exercise folder and extending the application with each module. To run this code, they should only have to run `npm start`