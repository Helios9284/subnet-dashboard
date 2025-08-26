const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const connectDB = require('./config/dbcon');
const PORT = process.env.PORT || 8000;
dotenv.config();

connectDB();

const allowedOrigins = [
  'https:https://rdo-landingpage.vercel.app', // Your frontend's production URL 
];

const app = express();
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., server-to-server requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: false, // Set to true if you need cookies or auth headers
}));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false
}))



// import router:
// const routes = require('./routes');
const routes = require('./routes');

app.use('/',routes);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})