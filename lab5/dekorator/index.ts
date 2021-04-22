function AdminAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.Admin;
}
function ModeratorAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Moderator;
}
function StandardAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Standard;
}


function watch(target: object, propKey: string, descriptor: PropertyDescriptor) {
	const originalFunction = target[propKey];
	descriptor.value = (param) => {
		console.log(`User: ${param} wants ${propKey}`);
		return originalFunction.call(this, param);
	};    
}

enum Role {
	Admin = 'Admin',
	Moderator = 'Moderator',
	Standard = 'Standard'
}

class User {
	name: string;
	surname: string;
	role: Role;

	toString(): string {
		return `${this.name} ${this.surname} ${this.role}`;
	}

}

@StandardAccess
class StandardUser extends User {

	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;                
	}
}
@ModeratorAccess
class ModeratorUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;                
	}
}
@AdminAccess
class AdminUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;                
	}
}

class Resource {
	private resourceValue: string;
	constructor() {
		this.resourceValue = "resource value";        
	}

	@watch
	public read(user: User): void {
		if (user.role === Role.Moderator || user.role === Role.Admin) {
			console.log(this.resourceValue);
		}
	}

	@watch
	public change(user: User): void {
		if (user.role === Role.Admin) {
			this.resourceValue = "changed resource value";
		}
	}
    
}


const user1 = new StandardUser("Max", "Human");
const user2 = new ModeratorUser("Sasha", "Gahan");
const user3 = new AdminUser("Martin", "Gore");

const res = new Resource();

console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());

console.log('User 1:');
res.read(user1);
res.change(user1);
console.log('User 2:');
res.read(user2);
res.change(user2);
res.read(user3);
console.log('User 3:');
res.change(user3);
res.read(user3);