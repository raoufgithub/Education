const jsonwebtoken = require('jsonwebtoken');
const jwt = require('jsonwebtoken')
const express = require('express');
const employee = require('./routers/employee');
const users = require('./routers/users')
const login = require('./routers/login')
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
connectDB();
app.use(cors());
app.use('/api/login', login)
/********************************************** */

app.use((req, res, next) => {
    const token = req.headers["x-access-token"]
    console.log(token)
    if(!token) {
        console.log('You are not authorized withou token')
        res.send('You are not authorized withou token')
    }
    else {
      jwt.verify(token, process.env.JWTPRIVATEKEY,(err, decoded) => {
        if(err){
          console.log("You failed to authenticate with this token")
          res.json({auth:false, message:"You failed to authenticate with this token"})
        }
        else {
          console.log("good toke")
          req.email = decoded.email
          next();
        }
      })
    }
  })

/********************************************** */



app.use('/api/employee', employee);
app.use('/api/user', users)

/********************************************** */
//Handling the 404 page not found
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

/********************************************** */

// app.listen(process.env.PORT, () => console.log("connection has been established on the port : " + process.env.PORT));
app.listen(process.env.PORT, () => console.log("connection has been established on the port : " + process.env.PORT ));