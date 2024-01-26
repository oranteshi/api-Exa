import { Venta } from "../domain/Venta";
import { VentaRepository } from "../domain/VentaRepository";

export class GetAllVentaUseCase {
  constructor(readonly ventaRepository: VentaRepository) {}

  async run(): Promise<Venta[] | null> {
    try {
      const result = await this.ventaRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
