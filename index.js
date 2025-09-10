const express = require("express");
const multer = require("multer");
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'videos')));



// MULTER CONFIGURATION
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'videos/');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

// ROUTES
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('video') , (req,res)=>{
    if(!req.file) return res.status(400).send('No file uploaded.');
    res.redirect(`/video/${req.file.filename}`);

});

app.get('/video/:filename',(req,res)=>{
    res.sendFile(path.join(__dirname, 'videoplayer.html'));
});


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));