export class User {
    name: string | undefined;
    age: number | undefined

    constructor (name: string, age: number){
        this.name = name
        this.age = age
    }
}