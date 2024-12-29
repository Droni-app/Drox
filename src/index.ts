import { IMyInterface } from "./types/index.js";

export const myObject: IMyInterface = {
  myProperty: "Hello, world!"
};
console.log(myObject.myProperty);