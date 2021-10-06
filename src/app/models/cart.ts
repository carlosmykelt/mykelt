export class Cart {

    id?: number;
    // idUser: string;
    idProduct: string;
    idPrice: string;
    quantity: number;
    // check: boolean;
// idUser: string, 
    constructor(idProduct: string, idPrice: string, quantity: number) {
        // this.idUser = idUser;
        this.idProduct = idProduct;
        this.idPrice = idPrice;
        this.quantity = quantity; 
        // this.check = check;
        // , check: boolean

    }

}
