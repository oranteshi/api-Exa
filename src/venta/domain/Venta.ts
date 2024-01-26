export class Venta {
    constructor(
      readonly id: number,
      readonly producto: string,
      readonly cantidad: number,
      readonly total: number,
    ) {}
}