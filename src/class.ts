// class pada typescript

// versi dari java
// export class User {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// versi lebih cleancode
// export class User {
//   constructor(public name: string) {}
// }

export class User {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): string {
    if ((this.name = value)) {
      return "Done";
    }

    return "Error";
  }

  // versi singkat setName
  /*
    setName(value: string): void {
      this.naem = value
    }
  */

  getName = (): string => {
    return this.name;
  };
}

// let user = new User("Asep", 25);
// console.log(user.getName());
// console.log(user.setName("Zaenal"));
// console.log(user.getName());

// public     = bisa diakses di semua class / dari luar class
// protected  = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private    = hanya bisa diakses dari kelas itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static role: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  static getRoleName() {
    return "Administrator";
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  } // karena method getRole type kembaliannya adalah object yg isinya read dan write, nah pas returnnya juga object read dan write

  // setter dan getter, setter untuk validator, getter untuk ngambil datanya
  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("0895383111382", "Jamilah", 22);
// admin.getName();
// admin.getRole();
// admin.setName("Maysaroh");
// admin.getName();
// console.log(admin.phone);

// admin.email = "maysaroh@mail.com";
// console.log(admin.email);

let admin = Admin.getRoleName();
console.log(admin);
