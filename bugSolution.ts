function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string[]{
    return persons.map(person => greeter(person));
}

let user = ["Alice", "Bob", "Charlie"];
console.log(greeterArray(user)); //This will fix the error by mapping over the array and applying the greeter function to each element.