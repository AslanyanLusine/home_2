const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
      isAstronaut: true, 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
      isAstronaut: true, 
    }, 
    { 
      username: "Elon Musk", 
      isAstronaut: false, 
    }, 
  ]; 

  function getAstronaut(users,code) {
    const astr = users.filter((obj) => {
        return obj[code]
    })
    return astr;
  }
  const res = getAstronaut(users, "isAstronaut");
  console.log(res)