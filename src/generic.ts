// tipe data generic itu tipe yg dinamis apa aja bisa, atau <T>

function getData(value: any) {
  return value;
}

console.log(getData("Kairi").length);
console.log(getData(5211).length);

// generic func

function myData<T>(value: T) {
  return value;
}

console.log(myData("Sutsujin").length);
console.log(myData(1));

// generic arrow func

const arrowFunc = <T>(value: T) => {
  // kalo make jsx, tsx <T extends unkwon> atau <T, >
  return value;
};
