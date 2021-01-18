const express = require('express');
const path = require('path');
const app = express();

// React build output folder
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});


//Set Port
const port = process.env.PORT || '3046';

app.listen(port, () => console.log(`Running on localhost:${port}`));