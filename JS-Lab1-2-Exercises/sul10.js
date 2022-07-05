// Write a JavaScript program to sort an array of JavaScript objects by title
// Sample object
// {
// id: 1
// title: 'Game of Thrones',
// year: 2011,
// stars: 5
// }

let arr = [
    {
    id: 1,
   title: ' Game',
   year: 2022,
   stars: 25
     },
      {
    id: 2,
   title: 'of ',
   year: 2022,
   stars: 25
     },
      {
    id: 1,
   title: 'Thrones',
   year: 2013,
   stars: 24
     }
   ];
   
   let sortedArr = arr.sort((a,b) => (a.title < b.title) ? -1 : ((b.title > a.title) ? 1 : 0))
   console.log(arr);