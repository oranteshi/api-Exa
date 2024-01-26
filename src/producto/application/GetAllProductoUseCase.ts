import { Producto } from "../domain/Producto";
import { ProductoRepository } from "../domain/ProductoRepository";

export class GetAllProductoUseCase {
  constructor(readonly productoRepository: ProductoRepository) {}

  async run(): Promise<Producto[] | null> {
    try {
      const result = await this.productoRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
