const express = require('express');
const router = express.Router();

const {getEmployee, createEmployee} = require('../controllers/employee');


router.get('/', getEmployee);
router.post('/', createEmployee);

module.exports = router;