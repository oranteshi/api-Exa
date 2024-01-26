import { Producto} from "./Producto";

export interface ProductoRepository {
  getAll(): Promise<Producto[] | null>;
  createProducto(
    nombre: string,
    descripcion: string,
    precio: number
  ): Promise<Producto | null>;
}
