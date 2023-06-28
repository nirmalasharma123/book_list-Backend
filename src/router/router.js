const express= require('express');
const router = express.Router();

const {createBooks,updateBook,getBooks,deleteBooks}= require('../controller/books');

router.post('/createBooks',createBooks);
router.put('/updateBook/:id',updateBook);
router.get('/getBooks',getBooks);
router.delete('/deleteBook/:id',deleteBooks)


module.exports = router