const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/home.html'));
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
})
app.post('/register', (req, res) => {
    res.redirect('/');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
})
app.post('/login', (req, res) =>{
    res.redirect('/');
})

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});