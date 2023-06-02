export class ExportThis {
    firstName;
    lastName;

    Constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print() {
        console.log(this.firstName + " " + this.lastName);
    }
}
