class ProductListPage {
    private addToCartBtn: string;
    private proceedToCheckoutBtn: string;
    private shirtItems: string

    constructor() {
        this.addToCartBtn ="#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckoutBtn = "a[title='Proceed to checkout']"
        this.shirtItems = ".product-container"
    }

    public addToCart(productName: string): void {
        this.findProductByName(productName).find('a > span').contains('Add to cart').click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutBtn).click()
    }

    private findProductByName(name: string) {
       return cy.get(this.shirtItems).filter(`:contains(${name})`)
    }

}

export { ProductListPage }
