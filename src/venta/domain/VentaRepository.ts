import { Venta } from "./Venta";

export interface VentaRepository {
  getAll(): Promise<Venta[] | null>;
  createVenta(producto: string, cantidad: number, total:number): Promise<Venta | null>;
  getById(ventaId: number): Promise<Venta | null>;
}
