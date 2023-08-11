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
  function filterUsers(arr) {
    const res = arr.filter(item => item.lang !== 'ru');
    return res;
  }
  const result = filterUsers(users);
  console.log(result)