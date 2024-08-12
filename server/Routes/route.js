import { Router } from 'express';
// import { query } from '../database/querys/query';
import Database from "../database/connection/bdAsync.js";
import ItemRepository from "../database/querys/queryAsync.js";
import config from "../database/connection/config.js";


const Routes = Router();



const dbAs = new Database(config);
const queryAs = new ItemRepository(dbAs);


/*
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



Routes.get("/users",async (req,res) =>{
    try{
        const users = await query.getAllUsers();
        res.json(users);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});


Routes.get("/users/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const user = await query.getUserById(id);
        res.json(user);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

Routes.post("/users",async (req,res) =>{
    try{
        const user = req.body;
        const result = await query.createUser(user);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

Routes.put("/users/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const user = req.body;
        const result = await query.updateUser(user, id);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

Routes.delete("/users/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const result = await query.deleteUser(id);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

*/

Routes.get("/users",async (req,res) =>{
    try{
        const users = await queryAs.getAllUsers();
        // dbAs.close();
        res.json(users);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});


Routes.get("/users/:id",async (req,res) =>{
    try{
        const user = req.params.id;
        const data = await queryAs.getUserById(user);
        // dbAs.close();
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

Routes.get("/create/:nombres/:apellidos/:edad",async (req,res) =>{

    try{
        const {nombres, apellidos, edad} = req.params;
        const data = await queryAs.create(nombres, apellidos, edad);
        // dbAs.close();
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    }
});

Routes.get("/update/:id/:edad",async (req,res) =>{
    try{
        const {id, edad} = req.params;
        const data = await queryAs.update(id, edad);
        // dbAs.close();
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    }
});


Routes.get("/delete/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const data = await queryAs.delete(id);
        // dbAs.close();
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    }
});
export default Routes;