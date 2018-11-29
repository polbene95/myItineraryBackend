const express = require('express');
const app = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser');
var ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://polbene:pol123@ds119374.mlab.com:19374/my_itinerary', (err, db) => {
    var dbase = db.db("my_itinerary");
    if (err) return console.log(err)
    app.listen(8080, () => {
      console.log('app working on 3000')
    })

    //POST

      router.post('/city/add', (req, res, next) => {
    
        var city = {
          name: req.body.name,
          country: req.body.country
        };
    
        dbase.collection("city").save(city, (err, result) => {
          if(err) {
            console.log(err);
          }
    
          res.send('city added successfully');
        });
      });

      //GET

      router.get('/city', (req, res) => {
        dbase.collection('city').find().toArray( (err, results) => {
          res.send(results)
        });
    });

    app.use("/api",router);
  })





