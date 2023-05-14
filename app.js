const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('public'))

app.set("view engine","ejs")
const templatePath = path.join(__dirname+'/template')
app.set('views',templatePath)

let items = [];

app.get('/',(req,res)=>{
    let today = new Date()
    let option = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
let day = today.toLocaleDateString("en-US", option)

res.render('list.ejs',{
    Date : day,
    todoItems : items
})
})

app.post('/',(req,res) =>{
    let minData = req.body.Data
        items.push(minData)
        res.redirect('/')
   
    
})

app

app.listen(PORT,()=>{
    console.log('Server Created Successfully!')
}) 