let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let Loh = structuredClone(passportWithAddress);
Loh.address.city = "Bobryisk";
console.log (passportWithAddress.address.city);
console.log (Loh.address.city);