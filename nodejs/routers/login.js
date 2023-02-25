
const express=require('express')
const router=express.Router();

const {authUser} = require('../controllers/users');

router.post('/', authUser);

module.exports = router;