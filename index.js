const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const connectDB = require('./config/dbcon');
const PORT = process.env.PORT || 8000;
dotenv.config();

connectDB();
const app = express();

// const allowedOrigins = [
//   'https://rdo-landingpage.vercel.app/',
//   'https://localhost:3000'
// ];
// app.use(cors());

const corsOptions = {
  origin: ['http://localhost:3000', 'https://https://rdo-landingpage.vercel.app'],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));


app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false
}))



// import router:
// const routes = require('./routes');
// const routes = require('./routes');

// app.use('/',routes);

app.get ('/save/getHistory', async (req, res) => {
    try{
        console.log("0000000000")
        const history = await StatusHistory.find().sort({ timestamp: -1 });
        if(!history){
            return res.status(404).json({ 
                success: false, 
                message: 'No history found' });
        }
        return res.status(200).json({ 
            success: true, 
            data: history });
    } catch(error){
        console.log(error)
        return res.status(500).json({ 
            success: false, 
            message: 'Server Error' });
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})