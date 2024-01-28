import express from "express";
import { createVentaController, getAllVentaController, getByIdVentaController } from "./dependencies";

export const ventaRouter = express.Router();

ventaRouter.get("/", (req, res) => {
    getAllVentaController.run(req, res);
});

ventaRouter.post("/", (req, res) => {
    createVentaController.run(req, res);
});

ventaRouter.get("/:id", (req, res) => {
    getByIdVentaController.run(req, res);
});