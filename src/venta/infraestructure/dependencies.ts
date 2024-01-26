import { CreateVentaUseCase } from "../application/CreateVentaUseCase";
import { CreateVentaController } from "./controllers/CreateVentaController";
import { GetAllVentaUseCase } from "../application/GetAllVentaUseCase";
import { GetAllVentaController } from "./controllers/GetAllVentaController";
import { GetByIdVentaController } from "./controllers/GetByIdVentaController";
import { GetByIdVentaUseCase } from "../application/GetByIdVentaUseCase";


import { MysqlVentaRepository } from "./MysqlVentaRepository";

export const mysqlProductRepository = new MysqlVentaRepository();
export const createVentaUseCase = new CreateVentaUseCase(
  mysqlProductRepository
);
export const getAllVentaUseCase = new GetAllVentaUseCase(
  mysqlProductRepository
);
export const createVentaController = new CreateVentaController(
  createVentaUseCase
);
export const getAllVentaController = new GetAllVentaController(
  getAllVentaUseCase
);
export const getByIdVentaUseCase = new GetByIdVentaUseCase(
  mysqlProductRepository
);
export const getByIdVentaController = new GetByIdVentaController(
  getByIdVentaUseCase
)

