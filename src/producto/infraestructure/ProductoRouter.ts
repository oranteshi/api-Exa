import express from 'express';

import { createProductoController, getAllProductoController } from "./dependencies";


export const productoRouter = express.Router();

productoRouter.post("/", (req, res) => {
    createProductoController.run(req, res)
        .then((result) => {
            res.json(result); 
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error interno del servidor"); 
        });
});

productoRouter.get("/", (req, res) => {
    getAllProductoController.run(req, res)
        .then((result) => {
            res.json(result); 
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error interno del servidor"); 
        });
});
