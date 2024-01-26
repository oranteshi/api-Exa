import { query } from "../../database/mysql";
import { Venta } from "../domain/Venta";
import { VentaRepository } from "../domain/VentaRepository";

export class MysqlVentaRepository implements VentaRepository {
  async getAll(): Promise<Venta[] | null> {
    const sql = "SELECT * FROM venta";
    try {
      const [data]: any = await query(sql, []);
      const dataVentas = Object.values(JSON.parse(JSON.stringify(data)));

      return dataVentas.map(
        (venta: any) =>
          new Venta(
            venta.id,
            venta.producto,
            venta.cantidad,
            venta.total,
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(ventaId: number): Promise<Venta | null> {
    const sql = "SELECT * FROM venta WHERE id=?";
    const params: any[] = [ventaId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Venta(
        result[0].id,
        result[0].producto,
        result[0].cantidad,
        result[0].total,
      );
    } catch (error) {
      return null;
    }
  }

  async createVenta(
    producto: string,
    cantidad: number,
    total: number,
  ): Promise<Venta | null> {
    const sql =
      "INSERT INTO venta (producto, cantidad,total) VALUES (?, ?,?)";
    const params: any[] = [ producto, cantidad,total];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Venta(result.insertId, producto, cantidad, total);
    } catch (error) {
      return null;
    }
  }
}
