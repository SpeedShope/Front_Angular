import { Order } from "./order";

export class Bill{
    id!:number;
    price!:number;
    code!:string;
    order!: Order;
}