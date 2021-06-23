const { insert } = require("./insert");

describe("Insert", () => {
	it("should insert a user in a empty array", () => {
		//Arrange
		const users = [];
		const user = "tiema";

		//Act

		const result = insert(users, user);

		//Assert

		expect(result).toEqual(["tiema"]);
		expect(result).toHaveLength(1);
	});

	it("should have two users inside the array", () => {
		//Arrange
		const users = ["sefyou"];
		const user = "tiema";

		//Act

		const result = insert(users, user);

		//Assert

		expect(result).toHaveLength(2);
	});
});
