{
  // JavaScript is a dynamically typed language, which means that you don't have to specify the type of a variable
  // when you declare it. The JavaScript engine determines the type of a variable at runtime.
  // let name ='abc'

  // but in type script you only need to specify type first
  // let name : string;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  // tuple
  let role: [number, string];
  role = [2, "admin"];

  // we can use union type which means that a variable can have multiple types
  let mixed: string | number;

  // we have one nay type which can contain any type of value
  let anyType: any;

  // it is not recommended to use any type because it can contain any type of value
  // it is better to use unknown type
  let unknownType: unknown;

  // let person:Object
  type Person = {
    name: string,
    // this property is optional
    age?: number,
  };

  let person1: Person = {
    name: "abc",
    age: 20,
  };

  // array of objects
  let persons: Person[];

  // function
  let person: (name: string, age: number) => void;
  // const person = (name: string, age: number) => {
  //   console.log(name, age)
  // }

  // if we don't want to return anything from function then we can use void it return undefined
  // also we can use never type which means that function never return anything

  let person2: (name: string, age: number) => never;

  // interface
  interface PersonInterface {
    name: string;
    age: number;
  }

  // that is more easier then type

  interface Guy extends PersonInterface {
    hobbies: string[];
  }

  // what is difference between type and interface
  // interface is used to define the structure of an object
  // type is used to define the type of a variable

  // y have all the properties of x in type
  type x = {
    a: string,
    b: number,
  };

  type y = x & {
    c: boolean,
  };

  // we can extend properties of interface
  interface x1 {
    a: string;
    b: number;
  }
}
