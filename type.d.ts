export interface Product {
    _id: any;
    title: string;
    description: string;
    price: number[];
    img: string;
    extraOptions: [{text: string, price: number}]
}[];

export interface Item {
    _id: any;
    title: string;
    description: string;
    price: number[];
    img: string;
    extraOptions: [{text: string, price: number}]

}[];

export interface StoreProduct {
    _id: any;
    title: string;
    description: string;
    price: number[];
    img: string;
    extraOptions: [{text: string, price: number}];
    quantity: number;
}[];

export interface UserInfo {
    _id:string,
    name:string;
    email: string;
}