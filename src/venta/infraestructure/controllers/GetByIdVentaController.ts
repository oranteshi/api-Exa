import { Request, Response } from "express";

import { GetByIdVentaUseCase } from "../../application/GetByIdVentaUseCase";

export class GetByIdVentaController {
  constructor(readonly getByIdVentaUseCase: GetByIdVentaUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const venta = await this.getByIdVentaUseCase.run(id);

      if (venta)
        res.status(200).send({
          status: "success",
          data: {
            id: venta.id,
            producto: venta.producto,
            cantidad: venta.cantidad,
            total: venta.total,
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
