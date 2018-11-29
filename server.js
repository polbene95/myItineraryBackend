const express = require('express');
const app = express();
const router = express.Router();
app.listen(3000);

router.get('/', function(req, res) {
    res.send("Yep it's working");
  });

app.use("/",router);


