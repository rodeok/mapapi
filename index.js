const express =  require('express')
const mongoose =  require('mongoose')
const app = express()
const userRoute = require('./routes/users')
const pinRoute = require('./routes/pins') 
require('dotenv').config()

app.use(express.json())
mongoose
.connect(process.env.MONGO_URI_LOCAL, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(()=>{
    console.log('connected to mongoDB')
})
.catch((err)=> console.log(err))


app.use('/api/users/', userRoute)
app.use('/api/pins/', pinRoute)
app.listen(8080, ()=> console.log('Server is running on port 3000'))