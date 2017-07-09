
class Person {
    private _firstName: string = "";
    get firstName(): string {
        return this._firstName;
    }
    set firstName(firstName: string) {
        this._firstName = firstName.toUpperCase();
    }
    enumerable:boolean=true;
    configurable:boolean=true;

}
var person = new Person();
person.firstName="Asaad";
console.log(person.firstName);
