const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burgers = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  burgers.all(function(data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function(req, res) {
  console.log(req.body);
  burgers.create(
      ['burger_name', 'devoured'],
      [req.body.burger_name, req.body.devoured],
      function(result) {
        // Send back the ID of the new quote
        console.log(result);
        res.json({id: result});
      });
});

router.put('/burgers/:id', function(req, res) {
  const condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burgers.update(
      {
        devoured: req.body.devoured,
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      },
  );
});

// Export routes for server.js to use.
module.exports = router;
