const express = require('express');

const app = express();

app.get("/clap", (req, res) => {
    res.json({
        claps: ['👏', '👏', '👏', '👏', '👏', '👏']
    })
})

app.listen(3000, () => {
    console.log('Clap API is running');
})