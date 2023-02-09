const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const ideasRoutes = require('./api/routes/ideas');
const usersRoutes = require('./api/routes/users');

const PORT = process.env.PORT || '8001';
app.use(cors())

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api', (req, res) =>{
    res.json({
        "users": ["userOne", "userTwo", "userThree", "userFour", "What the hell"]
    })
});

app.use('/api/ideas', ideasRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})