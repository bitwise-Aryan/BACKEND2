// const express = require('express')
// //app express se bna huwa h to express ki sari functionality h usme
// //for eg: get(request),listen(serve)
// const app = express()//app ek powerful tool h ab,like Math.random Math.kch or
// const port = 3000//comp mein dher sara port hota h,hmlog port no:3000 use kr rhay

// app.get('/', (req, res) => {//app aap jha pe home route / h wha pe listen kro,agr wha pe koi bhi request aati h to respond kro,(request,respond)
//   res.send('Hello World!')
// })



// app.get('/twitter',(req,res)=>{
//     res.send('hiteshdotcom')//it sends twitter url or username
// })
// app.listen(port, () => {//agr succesfully listen kr rhay ho to,port number bta do
//   console.log(`Example app listening on port ${port}`)
// })



//to use .env file
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')//it sends twitter url or username
})
app.get('/login',(req,res)=>{
    res.send('<h1>login is succesfully</h1>')//it sends twitter url or username
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

//iske op mein terminal end nhi horha q ki server continuously port 3000 pe listen kr rha h
//to stop use cntrl c

//dotenv mein sare imp dat rehte h
//use npm i dotenv to install
//create a file with name .env
//which contain all sensitive information


//syntax for env
// require('dotenv').config()
// process.env.port



// require('dotenv').config(); // Correct way to call dotenv
// const port = process.env.PORT || 5000; // Use uppercase "PORT" (env variables are case-sensitive)
// console.log(`Server running on port ${port}`);



// When you run git init, Git creates a hidden directory called .git in your project folder. This .git directory stores everything related to version control, including commit history, branches, configuration settings, and staged changes.
