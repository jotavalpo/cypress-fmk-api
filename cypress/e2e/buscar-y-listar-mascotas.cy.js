describe("Buscar y listar mascotas", () => {

    it ("Buscar una mascota por su id", () => {
        cy.request(
            {
                method: 'GET',
                url: "https://petstore.swagger.io/v2/pet/9223372036854775000"
            })

        .then((response) =>{
            const hasId = Object.keys(response).includes('id')
            expect(true).to.be.equal(hasId)

        })    
           
    })

    it ("Listar mascotas", () => {
        cy.request(
            {
                method: 'GET',
                url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
            })

        .then((response) =>{
            expect(response.body[0].name).to.equal('doggie')

        })    
           
    })
}) 