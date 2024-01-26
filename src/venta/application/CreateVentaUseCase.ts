import { Venta } from "../domain/Venta";
import { VentaRepository } from "../domain/VentaRepository";

export class CreateVentaUseCase {
  constructor(readonly ventaRepository: VentaRepository) {}

  async run(
    producto: string,
    cantidad: number,
    total: number,
  ): Promise<Venta | null> {
    try {
      const venta = await this.ventaRepository.createVenta(
        producto,
        cantidad,
        total
       );
      return venta;
    } catch (error) {
      return null;
    }
  }
}
