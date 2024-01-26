import { Request, Response } from "express";

import { GetAllProductoUseCase } from "../../application/GetAllProductoUseCase";

export class GetAllProductoController {
  constructor(readonly getAllProductoUseCase: GetAllProductoUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const productos = await this.getAllProductoUseCase.run();
      console.log(productos);
      if (productos)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: productos.map((producto: any) => {
            return {
              id: producto.id,
              nombre: producto.nombre,
              descripcion: producto.descripcion,
              precio: producto.precio,
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
