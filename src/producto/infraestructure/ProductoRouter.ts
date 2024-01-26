import express from 'express';

import {createProductoController} from "./dependencies"
import {getAllProductoController} from "./dependencies"

export const productoRouter = express.Router();

productoRouter.post("/",createProductoController.run.bind(createProductoController));
productoRouter.get("/",getAllProductoController.run.bind(getAllProductoController));