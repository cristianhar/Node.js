import { Router } from 'express';
const Routes = Router();

Routes.get("/", (req,res) =>{
    res.json({"content": "Hello"});
});

Routes.get("/home/:name", (req,res) =>{
    const nombre = req.params.name;
    res.send(`Welcome ${nombre}`);
});

Routes.get("/products/nombre", (req,res) =>{
    const id = req.query.producto;
    res.send(`Product: ${id}`);
});

Routes.post("/products", (req,res) =>{  
    const {nombre, precio} = req.body;
    res.send(`Producto: ${nombre} con un precio de  ${precio}`);
});
export default Routes;