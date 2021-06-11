'use strict';
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = persons => {
  // Use for..in to calculate age for each person
  // For example ages({
  //   lenin: { born: 1870, died: 1924 },
  //   mao: { born: 1893, died: 1976 },
  //   gandhi: { born: 1869, died: 1948 },
  //   hirohito: { born: 1901, died: 1989 },
  // })
  // should return {
  //   lenin: 54,
  //   mao: 83,
  //   gandhi: 79,
  //   hirohito: 88,
  // }

  let result = {}
  // for (let person in persons) {
  //   console.log(person);
  //   result[person] = persons[person].died - persons[person].born;
  // }

 result = Object.keys(persons)
 .forEach(person => result[person] = persons[person].died - persons[person].born);
 return result;

};
console.log(ages(persons));


module.exports = { ages };
