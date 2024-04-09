describe("Usuarios", () => {

    it ("Crear usuario", () => {
        cy.request(
            {
                method: 'POST',
                url: "https://petstore.swagger.io/v2/user/createWithArray",
                body:   {
                    id: 9999,
                    username: "jmontero",
                    firstName: "Jorge",
                    lastName: "Montero",
                    email: "jorge.valpo@hotmail.com",
                    password: "123456",
                    phone: "98765432",
                    userStatus: 1 
                }
            })

        .its('status')
        .should('equal', 200);

    })

    it ("Loguear usuario", () => {
        const user = "jmontero"
        const password = "123456" 
        cy.request(
            {
                method: 'GET',
                url: `https://petstore.swagger.io/v2/user/login?username=${user}&password=${password}`
            })
        .its('status')
        .should('equal', 200)    
    })

    it ("Desloguear usuario", () => {
        cy.request(
            {
                method: 'GET',
                url: "https://petstore.swagger.io/v2/user/logout"
            })
        .then((response)=>{
            expect(response.duration).to.not.be.greaterThan(300)      
        }) 
    })
})