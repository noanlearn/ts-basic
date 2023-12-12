interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Mac implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

let asus = new Asus("Asus", true);
console.log(asus.name);
console.log(asus.isGaming);
asus.on();

let mac = new Mac("Macbook Pro M2", false);
console.log(mac.name);
console.log(mac.keyboardLight);
mac.off();
