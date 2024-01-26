import { CreateProductoUseCase } from "../application/CreateProductoUseCase";
import { CreateProductoController } from "./controllers/CreateProductoController";
import { GetAllProductoUseCase } from "../application/GetAllProductoUseCase";
import { GetAllProductoController } from "./controllers/GetAllProductoController";
import { MysqlProductoRepository } from "./MysqlProductoRepository";

export const mysqlProductoRepository = new MysqlProductoRepository();
export const createProductoUseCase = new CreateProductoUseCase(
  mysqlProductoRepository
);
export const getAllProductoUseCase = new GetAllProductoUseCase(
  mysqlProductoRepository
);
export const createProductoController = new CreateProductoController(
  createProductoUseCase
);
export const getAllProductoController = new GetAllProductoController(
  getAllProductoUseCase
);
