const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
//Create API End Points (HTTP Request,Response)
app.get('/',(req,res)=>{
res.send('Welcome  URK22CS2024 to Node JS Server')
})
//config PORT and Start Server
const PORT = 8000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})