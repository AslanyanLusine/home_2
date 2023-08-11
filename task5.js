const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
    }, 
  ];
  
  function userName(arr) {
    const result = arr.map(item => item.username.length);
    return result;
  }
  const res = userName(users);
  console.log(res)