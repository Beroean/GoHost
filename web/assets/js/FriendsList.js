/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
FriendsList= {
    friends : null, //array of user objects with friends in them
    owner : 0,
    size: 0,
    create: function(iduser){
        owner = iduser;
        //get friends from database and populate list, fill in size and owner
    },
    getFriends: function(){
        return friends;
    },
    isUserOnList: function(iduser){
      for (i = 0; i<size; i++){
          if (iduser = friends[i].getID()){
              return true
          }
      }
      return false
    },
    
    
}
