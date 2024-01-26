import { query } from "../../database/mysql";
import { Producto } from "../domain/Producto";
import { ProductoRepository } from "../domain/ProductoRepository";

export class MysqlProductoRepository implements ProductoRepository {
  async getAll(): Promise<Producto[] | null> {
    const sql = "SELECT * FROM producto";
    try {
      const [data]: any = await query(sql, []);
      const dataProductos = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProductos.map(
        (producto: any) =>
          new Producto(
            producto.id,
            producto.nombre,
            producto.descripcion,
            producto.precio
          )
      );
    } catch (error) {
      return null;
    }
  }


  async createProducto(
    nombre: string,
    descripcion: string,
    precio: number
  ): Promise<Producto | null> {
    const sql =
      "INSERT INTO producto (nombre, descripcion, precio) VALUES (?, ?, ?)";
    const params: any[] = [nombre, descripcion, precio];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Producto(result.insertId, nombre, descripcion, precio);
    } catch (error) {
      return null;
    }
  }
}
