class Users{
    constructor(users){
        this.usersMap = this.mapUsers(users)
        
    }

    mapUsers(users){
        const mappedUsers = new Map()
        users.forEach(user => mappedUsers.set(user.id,user))
        return mappedUsers
    }

    getUserById(id){

        return this.usersMap.get(id)
    }
}



const mappedUser = new Users([ 
    { id: 1, name: "Alice", email: "alice@example.com" }, 
    { id: 2, name: "Bob", email: "bob@example.com" }, 
  ]);
  
  console.log(mappedUser);
  console.log(mappedUser.getUserById(1));