const express = require('express');
const cors = require('express');
const morgan = require('express');
const helmet = require('express');
const yup = require('yup');
const monk = require('monk');



const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));



//Create a short url 
app.post('/url', async (req, res, next) => {
    

});



app.get('/url/:id', (req, res) => {
    // TODO: get a short url by id from the original url 
});


const port = 1337;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);

})