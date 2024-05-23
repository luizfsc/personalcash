const express = require('express');

const path = require('path');



const app = express();



// Servindo arquivos estáticos da pasta 'personalcash'

app.use(express.static(path.join(__dirname, 'personalcash')));



app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'personalcash', 'index.html'));

});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});
