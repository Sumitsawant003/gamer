const express = require('express')
require('dotenv').config();
const connectToMongo = require('./db');
const cors = require('cors');

const app = express()
const port = process.env.WORK_PORT

app.use(cors());
connectToMongo();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({"result":"true hai"})
})

app.use('/auth', require('./routes/user.js'));
app.use('/amount', require('./routes/addamount.js'));
app.use('/userbio', require('./routes/userbio.js'));
app.use('/expec', require('./routes/expectation.js'));
app.use('/event', require('./routes/event.js'));
app.use('/ach', require('./routes/achievement.js'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})