require('dotenv').config();
const express = require('express');
const db = require('./db/connect');
const cors = require('cors');

//import routes
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();

//Connecting DB
db();

app.get('/', (req, res) => {
    res.send('Welcome to my MyOrg!');
})

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});