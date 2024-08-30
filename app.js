const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const infoRoutes = require('./routes/infoRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const  ErrorHandler =  require('./middleware/ErrorHandler');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);
app.use('/info', infoRoutes);
app.use('/google', googleAuthRoutes);

//Handling CORS Error
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization "
    );
    if ( req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).json({});
    }
    next();
  })


  //Error Handling 
  ErrorHandler(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
