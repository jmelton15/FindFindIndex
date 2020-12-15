const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];


  function findUserByUsername(objArr, key) {
        const name = objArr.find(function(user) {
            return user.username === key;
        })
        return name;
  }

  function removeUser(objArr, key) {
    if (findUserByUsername(objArr, key)) {
        const index = objArr.findIndex(function(user) {
            return user.username === key;
      })
        console.log("We reomved " + JSON.stringify(objArr[index]));
        objArr.splice(index, 1);
        return objArr;
    }
}
        
      
