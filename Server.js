const express = require('express');
const app = express();

// Dichiara l'uso della directory dei file statici
app.use("/",express.static(__dirname + "/"));

// Endpoint Home 
app.get('/', (req, res) => {
res.sendFile(__dirname + "/index.html");
});


// Porta su cui il server ascolterà
const port = 3000;
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});