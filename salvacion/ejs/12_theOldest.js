const people = [
  {
    name: 'Person1',
    yearOfBirth: 1900,
    yearOfDeath: 1980
  },
  {
    name: 'Person2',
    yearOfBirth: 1920,
    yearOfDeath: 2000
  },
  {
    name: 'Person3',
    yearOfBirth: 1940,
    yearOfDeath: 2010
  },
  {
    name: 'Person4',
    yearOfBirth: 1910,
    yearOfDeath: 1990
  }
];

let getAge = (dates) => {
  let ageIni = people.map(yearOfBirth => people.yearOfBirth);
  let ageFini = people.map(yearOfDeath => people.yearOfDeath);
  let ageDif = ageFini - ageIni;
}