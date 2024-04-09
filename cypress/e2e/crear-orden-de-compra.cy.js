describe("Checkout", () => {

    it ("Crear orden de compra", () => {
        cy.request(
            {
                method: 'POST',
                url: "https://petstore.swagger.io/v2/store/order",
                body:   {
                    id: 0,
                    petId: 9223372036854775000,
                    quantity: 1,
                    shipDate: "2024-02-01",
                    status: "placed",
                    complete: true 
                }
            })

        .its('status')
        .should('equal', 200);

    })
}) 
