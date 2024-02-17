let passport = {
    name: "Petr",
    surname: "Petrov",
};
let newname = {};
for (let key in passport) {
    newname[key] = passport[key];
}
newname.name = "Ivan";
console.log (passport);
console.log (newname);