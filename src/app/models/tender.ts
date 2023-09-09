import { Comment } from 'src/app/models/comment';
import { Product } from './product';
  
  export class Tender {
  id!: number;
    name!: string;
    description!: string;
    quantity!:string;
    image!:String;
    brand!:String;
    dateTender!:String;
    comments:Comment[]=[];
    products:Product[]=[];
    user_id!:number
  
  
  }