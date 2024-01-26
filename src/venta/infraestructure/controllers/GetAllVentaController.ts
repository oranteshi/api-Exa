import { Request, Response } from "express";

import { GetAllVentaUseCase } from "../../application/GetAllVentaUseCase";

export class GetAllVentaController {
  constructor(readonly getAllVentaUseCase: GetAllVentaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const ventas = await this.getAllVentaUseCase.run();
      if (ventas)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: ventas.map((venta: any) => {
            return {
              id: venta.id,
              producto: venta.producto,
              cantidad: venta.cantidad,
              total: venta.total
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
