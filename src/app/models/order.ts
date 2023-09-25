import { Bill } from "./bill";
import { Product } from "./product";

export class Order{
    id!:number;
    code!:string;
    adressedestination!:string;
    products! : Product[];
    bill!:Bill
}