const cincrease = (value, callback) => {
  setTimeout(() => {
    let result = value + 10;

    if(!(value > 50) && callback) {
      console.log(1, result)
      callback(result)
    }
  }, 1000)
}

let number = 0;

// cincrease(number, (result) => {
//   cincrease(result, (result) => {
//     cincrease(result, (result) => {
//       cincrease(result, (result) => {
//         cincrease(result, (result) => {
//           cincrease(result);
//           console.log(`1 result ${result}`)
//           console.log(Error('Number is Big'))
//         })
//       })
//     })
//   })
// })

const ccincrease = (value, callback) => {
  setTimeout(() => {
    let result = value + 1;

    if(!(value > 50) && callback) {
      console.log('bonus end', result)

      callback(result, callback);
    } else {
      console.log('End')
      return value;
    }
  }, 100)
}

let num = 0;
let res = ccincrease(num, ccincrease);
console.log(1111, res)



const pincrease = (value) => {
  // function pincrease(value) {
  console.log(20, value)
  const promise = new Promise((resolve, reject) => {
    value = value + 10;

    setTimeout(()=>{
      if(value>50) {
        console.log('error')
        const e = new Error('Number to Big');
        return reject(e)
      }

      resolve(value)
    }, 1000)
  })

  return promise;
}

// pincrease(0)
//   .then(number => {
//     console.log(21, 'init', number);
//     console.log(pincrease(number))
//     return pincrease(number);
//   })
//   .then(number => {
//     console.log(22, number);
//     return pincrease(number);
//   })
//   .then(number => {
//     console.log(23, number);
//     return pincrease(number);
//   })
//   .then(number => {
//     console.log(24, number);
//     return pincrease(number);
//   })
//   .then(number => {
//     console.log(25, number);
//     return pincrease(number);
//   })
//   .then(number => {
//     console.log(26, number);
//     return pincrease(number);
//   })
//   .catch(e => {
//     console.log(29)
//     console.log(e)
//   })


let runTasks = async () => {
  try {
    let result = await pincrease(0);
    console.log(3, 'init', result);

    result = await pincrease(result);
    console.log(3, result)
    result = await pincrease(result);
    console.log(3, result)
    result = await pincrease(result);
    console.log(3, result)
    result = await pincrease(result);
    console.log(3, result)
    result = await pincrease(result);
    console.log(3, result)
  } catch (error) {
    console.log(33)
    console.log(error)
  }
}

// runTasks();


//https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
const obj1 = { value: 1 }

const func1 = (value) => {
  const promise = new Promise((res, rej) => {
    value.value = value.value+1;

    if(false) {
      rej(value)
    }

    res(value)
  })
  
  return promise;
}
const func2 = (value) => {
  console.log(value)
}
const func3 = (value) => {

}
const func4 = (value) => {

}

func1(obj1)
  .then(func2)
  .then(func3)
  .then(func4)
  .catch((e)=>{
    console.log(e)
  })