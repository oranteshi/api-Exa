import { Producto } from "../domain/Producto";
import { ProductoRepository } from "../domain/ProductoRepository";

export class CreateProductoUseCase {
  constructor(readonly productoRepository: ProductoRepository) {}

  async run(
    nombre: string,
    descripcion: string,
    precio: number
  ): Promise<Producto | null> {
    try {
      const producto = await this.productoRepository.createProducto(
        nombre,
        descripcion,
        precio
      );
      return producto;
    } catch (error) {
      return null;
    }
  }
}
