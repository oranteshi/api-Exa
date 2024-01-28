import { Request, Response } from "express";

import { CreateProductoUseCase } from "../../application/CreateProductoUseCase";


export class CreateProductoController {
  constructor(readonly createProductoUseCase: CreateProductoUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const producto = await this.createProductoUseCase.run(
        data.nombre,
        data.descripcion,
        data.precio
      );

      if (producto)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: producto?.id,
            name: producto?.nombre,
            email: producto?.descripcion,
            age: producto?.precio,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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
