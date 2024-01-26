import express from "express";

import {createVentaController} from "./dependencies";
import {getAllVentaController} from "./dependencies";
import {getByIdVentaController  } from "./dependencies";


export const ventaRouter = express.Router();

ventaRouter.get("/",getAllVentaController.run.bind(getAllVentaController));
ventaRouter.post("/",createVentaController.run.bind(createVentaController));
ventaRouter.get("/:id",getByIdVentaController.run.bind(getByIdVentaController));
