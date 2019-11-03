var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var app = express();
var mysql = require("mysql");
var cors = require("cors");
var config = require("./config/setting");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    secret: "cmpe273_canvas",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
);

//Allow Access Control
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});
app.get("/", (req, res) => res.send("Hello World!"));

app.post("/volunteers", function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const employer = req.body.employer;
  const industry = req.body.industry;
  const address = req.body.address;
  const career_field = req.body.career_field;
  const cryptedpassword = bcrypt.hashSync(password);
  var select =
    "select * from volunteers where  username = " + mysql.escape(username);
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      if (result.length == 0) {
        var insert =
          "Insert into volunteers  ( name , email, phone, username , password,  employer, industry, address, career_field) values ( " +
          mysql.escape(name) +
          " , " +
          mysql.escape(email) +
          " , " +
          mysql.escape(phone) +
          " , " +
          mysql.escape(username) +
          " , " +
          mysql.escape(cryptedpassword) +
          " , " +
          mysql.escape(employer) +
          " , " +
          mysql.escape(industry) +
          " , " +
          mysql.escape(address) +
          " , " +
          mysql.escape(career_field) +
          ")";
        conn.query(insert, function(err, result) {
          if (err) {
            console.log(err);
            res.status(500).send("Something went wrong...try again later...");
          } else res.status(201).send("User Created Successfully");
        });
      } else {
        res.status(400).send("Oh uh, something went wrong");
      }
    }
  });
});

app.post("/students", function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const career_field = req.body.career_field;
  const cryptedpassword = bcrypt.hashSync(password);
  var select =
    "select * from students where  username = " + mysql.escape(username);

  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      if (result.length == 0) {
        var insert =
          "Insert into students  ( name , email, phoneno, username , password, career_interest) values ( " +
          mysql.escape(name) +
          " , " +
          mysql.escape(email) +
          " , " +
          mysql.escape(phone) +
          " , " +
          mysql.escape(username) +
          " , " +
          mysql.escape(cryptedpassword) +
          " , " +
          mysql.escape(career_field) +
          ")";
        conn.query(insert, function(err, result) {
          if (err) {
            console.log(err);
            res.status(500).send("Something went wrong...try again later...");
          } else res.status(201).send("User Created Successfully");
        });
      } else {
        res.status(400).send("Oh uh, something went wrong");
      }
    }
  });
});

app.get("/student", function(req, res) {
  var select =
    "select * from students where studentid = " +
    mysql.escape(req.query.studentid);
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/students", function(req, res) {
  var select = "select * from students";
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      var select = "select * from students";
      conn.query(select, function(err, result) {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong...try again later...");
        } else {
          console.log(result);
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(JSON.stringify(result));
        }
      });
    }
  });
});
app.get("/volunteer", function(req, res) {
  var select =
    "select * from volunteers where volunteerid = " +
    mysql.escape(req.query.studentid);
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/volunteers", function(req, res) {
  var select = "select * from volunteers";
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      conn.query(select, function(err, result) {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong...try again later...");
        } else {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(JSON.stringify(result));
        }
      });
    }
  });
});
app.post("/events", function(req, res) {
  var dt = dateTime.create();
  var createdDate = dt.format("Y-m-d H:M:S");
  var insert =
    "Insert into events  (event_location, event_date, station)  values ( " +
    mysql.escape(req.body.event_location) +
    " , " +
    mysql.escape(createdDate) +
    " , " +
    mysql.escape(req.body.station) +
    ")";
  conn.query(insert, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Events Details Added successfully");
    }
  });
});

app.post("/students_signup_events", function(req, res) {
  var insert =
    "Insert into student_by_events  (student_id, event_id)  values ( " +
    mysql.escape(req.body.student_id) +
    " , " +
    mysql.escape(req.body.event_id) +
    ")";
  conn.query(insert, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Students Registered successfully");
    }
  });
});
app.post("/volunteers_signup_event", function(req, res) {
  var insert =
    "Insert into volunteers_by_event  (volunteer_id, event_id)  values ( " +
    mysql.escape(req.body.volunteer_id) +
    " , " +
    mysql.escape(req.body.event_id) +
    ")";
  conn.query(insert, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Students Registered successfully");
    }
  });
});

app.post("/event_booking", function(req, res) {
  var insert =
    "Insert into bookings  (volunteerid, studentid, eventid)  values ( " +
    mysql.escape(req.body.volunteerid) +
    " , " +
    mysql.escape(req.body.studentid) +
    "," +
    mysql.escape(req.body.eventid) +
    ")";
  conn.query(insert, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Event booked successfully");
    }
  });
});

app.get("/students_for_events", function(req, res) {
  var select =
    "select s.name, s.career_interest, s.studentid from students s inner join student_by_events se on s.studentid = se.student_id where event_id = " +
    mysql.escape(req.query.event_id);
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.end(JSON.stringify(result));
    }
  });
});

app.get("/volunteers_for_events", function(req, res) {
  var select =
    "select v.name, v.career_field, v.volunteerid from volunteers v inner join volunteers_by_event ve on v.volunteerid = ve.volunteer_id where event_id = " +
    mysql.escape(req.query.event_id);
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.end(JSON.stringify(result));
    }
  });
});

app.get("/booked_event", function(req, res) {
  var select =
    "select * from bookings where eventid = " + mysql.escape(req.query.eventid);
  conn.query(select, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong...try again later...");
    } else {
      res.status(200).json(result);
    }
  });
});
app.listen(3000);
module.exports = app;
