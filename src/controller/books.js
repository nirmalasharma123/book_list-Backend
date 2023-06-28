function createBooks(req, res) {
  try {
    
  
  const {title} = req.body;
  const createBook = `INSERT INTO books(title)  VALUE ('${title}')`
  
  req.db.query(createBook,(err,result)=>{
    if(err){
      res.status(400).send(err.message)
    }
    else{
      let getBooks = result.insertId;

      let getdata = `SELECT * FROM books WHERE id=${getBooks}`;

      req.db.query(getdata,(err,data)=>{
        if(err){
          res.status(400).send(err.message)
        }
        else{
          let final = data[0];
          res.status(201).send(final)
        }
      })
    }
  }) } catch (error) {
    res.status(500).send({status:false, message: error.message})
    
  }
}

function updateBook( req,res){
  try {
    let id = req.params.id;
    let {title}= req.body;

    let updateDb = ` UPDATE books SET title='${title}' WHERE id = ${id}`;

    req.db.query(updateDb,(err,result)=>{
      if(err){
        res.status(400).send({status:false,message: err.message})
      }
      else{
        let updatedDocument = `SELECT * FROM books WHERE id=${id}`;

        req.db.query(updatedDocument,(err,final)=>{
          if(err){
            res.status(400).send({status:false,message:err.message})
          }
          else{
            res.send(final)
          }
        })
      }
    })
    
  } catch (error) {
    res.status(500).send({status:false,message:error.message})
    
  }
}






function getBooks(req,res){
  try {
    
 
  let findBooks = `select * from books`;
  req.db.query(findBooks,(err,result)=>{
    if(err)console.log(err)
    res.send(result)
  }) } catch (error) {
    res.status(500).send({status:false,message:error.message})
    
  }
};

function deleteBooks(req,res){
  try {
    
 
  let id= req.params.id;

  let deleteBook=`DELETE FROM books
  WHERE id = ${id}`;
  req.db.query(deleteBook,(err)=>{
    if(err) return res.status(400).send(err.message);
    res.status(200).send("Book deleted successfully")
  });
} catch (error) {
  res.status(500).send({status:false,message:error.message})
  
}
}
module.exports ={createBooks,updateBook,getBooks,deleteBooks}