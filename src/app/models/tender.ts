import { Comment } from 'src/app/models/comment';
  
  export class Tender {
  id!: number;
    name!: string;
    description!: string;
    quantity!:string;
    image!:String;
    brand!:String;
    dateTender!:String;
    comments:Comment[]=[];
  
  
  }