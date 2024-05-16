//need to import Chai and Mocha npm packages to allow these test functions to run

it("should generate a number greater than or equal to the minimum", ()=>{
    const result = generateRandomNumInRange(2,6);
    expect(result).to.be.at.least(2);
})

it("should generate a number less than or equal to the max", ()=>{
    const result = generateRandomNumInRange(1,10);
    expect(result).to.be.at.most(10);
    //Asserts that the target is less than or equal to value.
})