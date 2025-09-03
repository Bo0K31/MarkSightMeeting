const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path:'./config/config.env'});

// Connect to database
connectDB();

// Router files
const meetings = require('./routes/meeting');

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/meetings', meetings)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', process.env.PORT));

// Handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error ${err.message}`);
    // Close server & exit process
    server.close(()=>process.exit(1));
});