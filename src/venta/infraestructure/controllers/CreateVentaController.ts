import { Request, Response } from "express";

import { CreateVentaUseCase } from "../../application/CreateVentaUseCase";

export class CreateVentaController {
  constructor(readonly createVentaUseCase: CreateVentaUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const venta = await this.createVentaUseCase.run(
        data.producto,
        data.cantidad,
        data.total,
      );

      if (venta)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: venta?.id,
            producto: venta?.producto,
            cantidad: venta?.cantidad,
            total: venta?.total,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar la venta",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
