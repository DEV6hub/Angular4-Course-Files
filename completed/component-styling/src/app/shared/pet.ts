export class Pet {
	constructor(
		public type: "cat" | "dog",
		public id: number = 0,
		public name: string = "",
		public breed: string = "",
		public description: string = "",
		public birthday: Date = new Date()
	) {}
}