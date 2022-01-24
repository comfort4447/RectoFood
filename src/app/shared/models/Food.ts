export class Food{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favourite?:boolean;
    stars:number = 0;
    imageUrl!:string;
    origin!:string[];
    cookTime!:string;
}