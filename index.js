const express = require('express');
const app = express();

const route = require('./routes/router')

app.use(route)

const PORT = process.env.PORT || 3000
app.listen(PORT, err => {
    if(!err) console.log("Your App is Running")
});
