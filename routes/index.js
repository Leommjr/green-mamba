import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/test');
  });


export default router;