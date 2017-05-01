export class Dog {
	id: number;
	name: string;
	type: string;
	description: string;
	birthday: Date;
	
	constructor(name?: string, type?: string, description?: string, birthday?: Date) {
		this.name = name;
		this.type = type;
		this.description = type;
		this.birthday = birthday;
	}
}
