var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var PORT = 8080;

var db = mongoose.connect('mongodb://localhost/calendar');
var Task = require('./models/taskModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var taskRouter = express.Router();

taskRouter
  .route('/tasks')
  .post(function (request, response) {
    var task = new Task(request.body);

    task.save();
    response.status(201).send(task);
  })
  .get(function (request, response) {

    Task.find(function (error, dayDocument) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(dayDocument);

      response.json(dayDocument);
    });
  });

taskRouter
  .route('/tasks/:day')
  .get(function (request, response) {

    var day = request.params.day;

    Task.find({ day: day }, function (error, dayDocument) {
      if (error) {
        console.error(error);

        response.status(500).send(error);

        return;
      }

      console.log(dayDocument);

      response.json(dayDocument);

    });
  })
  .put(function (request, response) {

    var day = request.params.day;

    Task.findOne({ day: day }, function (error, task) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (task) {
        task.text = request.body.text;
        task.latitude = request.body.latitude;
        task.longitude = request.body.longitude;
        task.save();

        response.json(task);
        return;
      }

      response.status(404).json({});
    });
  })
  .patch(function (request, response) {

    var day = request.params.day;

    Task.findOne({ day: day }, function (error, task) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (task) {
        task.text = request.body.text;
        task.latitude = request.body.latitude;
        task.longitude = request.body.longitude;
        task.save();

        response.json(task);
        return;
      }

      response.status(404).json({});
    });
  })
  .delete(function (request, response) {
    var day = request.params.day;

    Task.findOne({ day: day }, function (error, task) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (task) {
        task.remove(function (error) {
          if (error) {
            response.status(500).send(error);
            return;
          }

          response.send(204).json({
            'status': 'Removed'
          });
          return;
        });
      }

      response.status(404).json({});
    }); 
  });

app.use('/api', taskRouter);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});