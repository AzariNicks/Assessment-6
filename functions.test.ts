const {shuffleArray} = require('./utils')
describe('shuffleArray should', () => {

    test('return as an array' , () => {
    expect(Array.isArray(shuffleArray([1,2,300,90,2000]))).toBe(true)
    }) 
    test('stays the same size' , () => {
        expect(shuffleArray([1,2,300,90,2000]).length).toBe(5)
    }) 
    test('isnt the same thing' , () => {
    expect(shuffleArray([1,2,300,90,2000])).not.toBe([1,2,300,90,2000])
    }) 
    test('has all the numbers' , () => {
        expect(shuffleArray([1,2,300,90,2000])).toContain(2000)
        expect(shuffleArray([1,2,300,90,2000])).toContain(90)
        expect(shuffleArray([1,2,300,90,2000])).toContain(2)
        expect(shuffleArray([1,2,300,90,2000])).toContain(1)
        expect(shuffleArray([1,2,300,90,2000])).toContain(300)
        }) 
})