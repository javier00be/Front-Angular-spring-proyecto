export class Customer {
  constructor(public id: number | null, public firstName: String, public lastName: String, public email: String) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
