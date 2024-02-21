const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

//dotenv configuaration
dotenv.config()

//rest object
const app = express()

//midlewares
app.use(cors())
app.use(express.json())


//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
// app.get('/',(req,res) => {
//     res.send('<h1>Welcome to node server</h1>')
// })

//port
const PORT= process.env.PORT || 8080


//listens
app.listen(PORT, () =>{
    console.log(`Server Running On PORT ${PORT}`);
})