import express from "express";
import { Signale } from "signale";

import { productoRouter } from "./producto/infraestructure/ProductoRouter";
import { ventaRouter } from "./venta/infraestructure/VentaRouter";

const app = express();

app.disable("x-powered-by");

const options = {
  secrets: ["([0-9]{4}-?)+"]
};

const logger = new Signale(options); 

app.use(express.json());
app.use("/productos", productoRouter);
app.use("/ventas", ventaRouter);

app.listen(4000, () => {
  logger.success("Server online in port 4000");
});

