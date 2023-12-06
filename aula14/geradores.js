// const rand = (min = 1, max = 3) => {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) - min);
// }

// const geraMaisculo = () => {
//     String.fromCharCode(rand(55, 91))
// }


// console.log(geraMaisculo());

const rand = (min = 1, max = 3) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const geraMaiscula = () => {
      return String.fromCharCode(rand(65, 91));
  }
  
  const geraMinuscula = () => {
    return String.fromCharCode(rand(97, 123));
}

  console.log(geraMaiscula(), geraMinuscula());
  