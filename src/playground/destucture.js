const osoba={
    ime:"Lazar",
    starost:6
};
const {ime,starost:star=10}=osoba;
console.log(`${ime} je star ${star}`);