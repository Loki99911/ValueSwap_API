const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config();

const catalogRouter = require("./routes/api/catalogsRouts");
const app = express()
const PORT = process.env.PORT

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use("/api", catalogRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found route' })
})

app.use((err, req, res, next) => {
  const { status = 500, message="Server error" } = err;
  res.status(status).json({ message });
})
app.listen(PORT, () => {
  console.log(`Connection successful`);
});

module.exports = app;
