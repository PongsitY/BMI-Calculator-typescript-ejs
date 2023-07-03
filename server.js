import express from 'express';

const app = express();
const port = 11244;

app.set("view engine", "ejs");
app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port, () => {
    console.log(`Start server at port ${port}`);
    console.log(`http://localhost:${port}`);
});

app.get('/', (req,res) => {
    res.render('index')
});