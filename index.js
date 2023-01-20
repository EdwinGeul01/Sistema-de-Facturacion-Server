const express = require('express');
const app = express();
const cors = require('cors');


app.set('port',4000);
app.use(express.json());
app.use(cors());


app.listen(app.get('port'),()=>{

    console.log(`server on port ${4000}`);



})




app.use(require('./Routes/routes'))



