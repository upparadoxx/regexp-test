const str = `
010-8986-7591
theupparadoxx@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The Quick brown Fox jumps over the lazy dog.
abbcccdddd
`;

console.log(
  str.match(/(?<=@).{1,}/g)
);