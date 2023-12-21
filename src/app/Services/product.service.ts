export class ProductService {

    productList:Array<any> = [
        { id:1, productTitle: "product 1", content:"some text for product 1"},
        { id:2, productTitle: "product 2", content:"some text for product 2"},
        { id:3, productTitle: "product 3", content:"some text for product 3"},
        { id:4, productTitle: "product 4", content:"some text for product 4"},
        { id:5, productTitle: "product 5", content:"some text for product 5"},
        { id:6, productTitle: "product 6", content:"some text for product 6"},
    ]

    addProduct(data:any){
        this.productList.push(data);
    }

    removeProduct(index:number){
        this.productList.splice(index,1);
    }
}