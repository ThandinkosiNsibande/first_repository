
const express = require('express');
const app = express();


app.use(express.json());
app.listen(3000,()=>console.log('Listening on port 3000'));

let books =[];



//GET
app.get('/whoami' , (req,res)=>{
    res.status(200).json(
        {"studentNumber": 2575660}
    )
        });


app.get('/books', (req,res)=>{
    res.status(200).json(books)
        });
   

app.get('/books/:id', (req,res)=>{
   const id = parseInt(req.params.id);
   const book = books.find((book)=>book.id===id);

   if (!book){
    res.status(404).json({msg:'Not Found'});
   }
   else{
    res.status(200).json(book);
   }

});


//POST

app.post('/books', (req,res)=>{
    const book ={
        id: books.length +1,
        title: req.body.title,
        details: req.body.details 
    }

     
   if(book.title ==="" || book.details.length<1){
        res.status(400).json({msg:'Bad Request'});
    }
    else{books.push(book);
        res.status(200).send(book);
    } 
    });



    
    
    
//DELETE
app.delete('/books/:id' , (req,res)=>{
        const book = books.find(c=>c.id === parseInt(req.params.id));
        if(!book) return res.status(404).json({msg:'Not Found'});
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.status(200).send(book);
            });


//PUT
app.get('/books/:id' , (req,res)=>{
    const book = books.find(c=>c.id === parseInt(req.params.id));
        if(!book) return res.status(404).json({msg:'Not Found'});
        res.status(200).send(book);
         book ={
            id: books.length +1,
            title: req.body.title,
            details: req.body.details 
        }

        });





   