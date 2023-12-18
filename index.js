// Code your solution here

// the function returns the matching list of drivers
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
function findMatching(drivers, str) {
  const filteredDrivers = drivers.filter((driver) => driver.toLowerCase() === str.toLowerCase());
  return filteredDrivers.length ? filteredDrivers : [];
}

console.log(findMatching(drivers, "Bobby"));

//This function returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, str) {
  const initialLetter = drivers.filter((driverName) =>
    driverName.startsWith(str)
  );
  return initialLetter.length === 0 ? [] : initialLetter;
}

console.log(fuzzyMatch(drivers, "Sa"));

//this function returns each element whose name property matches the provided string argument.
const driver = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function matchName(driver, str) {

  return driver.filter((driverArray) => driverArray.name === str );
}
console.log(matchName(driver, 'Bobby'));