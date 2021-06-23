const { add } = require("./add");
describe("Add", () => {
	it("should add two positives numbers", () => {
		//Test unitaire a toujours 3 étapes => TRIPLE AAA

		//Arrange
		const a = 4;
		const b = 3;

		//Act
		const result = add(a, b);

		//Assert
		expect(result).toEqual(7);
	});

	it("should add two positives numbers", () => {
		expect(add(3, 4)).toEqual(7);
	});

	it("should add two negative numbers", () => {
		//Arrange
		const a = -9;
		const b = -2;

		//Act
		const result = add(a, b);

		//Assert
		expect(result).toEqual(-11);
	});

	it("should add one positive number and one negative", () => {
		//Arrange
		const a = -2;
		const b = 2;

		//Act
		const result = add(a, b);

		//Assert
		expect(result).toEqual(0);
	});
});
