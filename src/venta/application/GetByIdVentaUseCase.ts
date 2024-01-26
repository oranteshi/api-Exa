import { Venta } from "../domain/Venta";
import { VentaRepository } from "../domain/VentaRepository";

export class GetByIdVentaUseCase {
  constructor(readonly ventaRepository: VentaRepository) {}

  async run(id: number): Promise<Venta | null> {
    try {
      const result = await this.ventaRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
