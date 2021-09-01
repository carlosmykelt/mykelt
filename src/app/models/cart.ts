export class Cart {

    id?: number;
    // idUser: string;
    idProduct: string;
    idPrice: string;
    quantity: number;

// idUser: string, 
    constructor(idProduct: string, idPrice: string, quantity: number) {
        // this.idUser = idUser;
        this.idProduct = idProduct;
        this.idPrice = idPrice;
        this.quantity = quantity; 

    }

}
