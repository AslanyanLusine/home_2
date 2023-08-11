const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
      age: 56, 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
      age: 54, 
    }, 
  ]; 


  function getAverageAge(users) {
    const res = users.reduce((acc,item) => {
        return acc += item.age
    },0)
    return (res / users.length)
  }
  console.log(getAverageAge(users));