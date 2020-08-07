const ages = [12, 13, 57, 32, 27,];
const ages2 = [56, 19, 45, 79];
const ages3 = [78, 31, 15, 18, 21, 12];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const takePoisa = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takePoisa);
console.log(maximum);