describe('Guess who?', ()=>{
    describe('MVP', ()=>{
        describe('everything that happens automatically as the website loads', ()=>{
            it('checks if the computer is choosing a NUMBER which represents a card', ()=>{
                expect(computersChoice).to.be.a('number')
            })
            it('checks if the computers translates its card number representation into an ARRAY of characteristics that that it card has',()=>{
                expect(computersChoiceCharacteristics).to.be.a('array')
            })
            it('checks if the buttons representing different characteristics about which user can ask questions are loaded into an array AND if there are 18 of those characteristics', ()=>{
                expect(buttonsForValues).to.be.a('array').with.lengthOf(18)
            })
            it('checks if there are 24 characters in the game', ()=>{
                expect(characteristic).to.have.lengthOf(24)
            })
            it('checks if the there is an array that represents cards that are turned over',()=>{
                expect(cardsToBeTurnedOver).to.be.a('array')
            })
            it('checks if there is a variable called x which is a bool that lets us know if we guessed some characteristic of the character', ()=>{
                expect(x).to.be.a('boolean')
            })
        })

        describe('getting the user to interact with the website/variables correctyl', ()=>{
            it('checks')
        })
    })
})