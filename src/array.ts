// array
let array: number[];
array = [1, 2, 4];

let array2: string[];
array2 = ["kairi", "habil"];

let array3: any[];
array3 = ["kairi", 7, true, {}];

console.log(array2);

// tuples : tipe data yg isinya terbatas
let biodata: [string, number];
biodata = ["kairi", 20];
// biodata = ["pro player", true] // gabisa karna param ke 2, harusnya number bukan boolean
// biodata = ["Surabaya", 27, true, "string"] // gabisa juga karena tuples biodata cuman di set 2 param
