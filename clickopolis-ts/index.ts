var isDone: boolean = false;
var height: number = 6;
var name: string = "Bob";
var list:number[]  = [1, 2, 3];
var list:Array<number> = [1, 2, 3];

enum Color {Red = 1, Green, Blue};
var c: Color = Color.Green;
var colorName: string = Color[2];

var notSure: any = 4;
notSure = "maybe a string instead";

function warnUser(): void {
  alert("Message");
}

// Typechecking focuses on the 'shape' that values have
// Called structural subtyping
// Interfaces fill the role of naming these types
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
  var newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

var mySquare = createSquare({color: "black"});



class Student {
  fullname: string;
  constructor(public firstname, public middleinitial, public lastname) {
    this.fullname = firstname + " " + middleinitial + " " + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
