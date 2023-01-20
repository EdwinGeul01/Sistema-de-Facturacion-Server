const router = require('express').Router();
const mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'db',
  user     : 'admin',
  password : '1234',
  database : 'facturaciondb',
  port: 3306
});

connection.connect();

router.get('/users' , (req , res)=>{
    connection.query('SELECT * FROM usuarios', function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})



router.get('/getproducts' , (req , res)=>{
    connection.query('SELECT * FROM productos', function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})



router.post('/addproduct' , (req , res)=>{

    const {nombre,cantidad,precio} = req.body;
    const values = [nombre,cantidad ,precio]


    connection.query('INSERT INTO productos ( nombre, cantidad ,precio) VALUES (?,?,?) ', values, function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})


router.post('/modifyProduct' , (req , res)=>{

    const {id,cantidad,precio} = req.body;
    const values = [cantidad ,precio,id]
    console.log(req.body);

    connection.query('UPDATE productos SET cantidad = ? , precio = ? where id = ?', values, function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})



router.post('/deleteproduct' , (req , res)=>{

    const {id} = req.body;
    const values = [id]

    connection.query('DELETE FROM productos WHERE id = ?', values, function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})




router.post('/GetProductById' , (req , res)=>{

    const {id} = req.body;
    const values = [id]

    connection.query('SELECT * FROM productos WHERE id = ?', values, function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})


router.post('/AddToSellHistory' , (req , res)=>{

    const {total , date} = req.body;
    const values = [date, total]

    connection.query('INSERT INTO historialventas (fecha,total) VALUES (?,?)', values, function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})



router.get('/getsellHistory' , (req , res)=>{
    connection.query('SELECT * FROM historialventas', function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})




router.post('/ReduceById' , (req , res)=>{

    const {id , cantidad} = req.body;
    const values = [id , cantidad]

    connection.query('call reducircantidad(?,?)', values, function (error, results, fields) {
        if (error) 
        {
            console.log(error.message);
            return;
        }
        
            
        console.log('The result is: ', results);
        res.json(results)
        return;
      });
})





router.get('/' , (req , res)=>{

    res.send("hola");

})


module.exports  = router

