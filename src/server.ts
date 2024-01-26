import express from "express";
import { Signale } from "signale";

import { productoRouter } from "./producto/infraestructure/ProductoRouter";
import { ventaRouter } from "./venta/infraestructure/VentaRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
app.use("/productos", productoRouter);
app.use("/ventas", ventaRouter);

app.listen(4000, () => {
  signale.success("Server online in port 4000");
});
