import { useState } from 'react'

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];


function App() {

  const [initialFriends, setInitialFriends] = useState([]);

  function settingInitialFriends(friend){
    setInitialFriends([...initialFriends, friend])

  }

  return (

    <div className='container'>
      <div>
        <Friends initialFriends={initialFriends}/>
        <AddFriends settingInitialFriends={settingInitialFriends} />
      </div>
      <div>
        <Billing/>
      </div>
    </div>



  );
}

function Friends({initialFriends}){

  return(
  <div className='FriendsList'>
    {initialFriends.map((friend)=><Friend key={friend.id} friend={friend}/>)}
  </div>
  );

}

function Friend ({friend}){

  return(
    <div className='FriendContainer'>
      <img src={friend.image} alt="profile photo" />
      <div className='Info'>
        <h3>{friend.name}</h3>
        <p>{friend.balance}</p>
      </div>
      <button onClick={()=>alert("Button clicked!")}>
        Select
      </button>
    </div>
  )
  
}

function AddFriends({settingInitialFriends}){

  const [friend, setFriend] = useState({});
  const [adding, setAdding] = useState(false);

  function addFriend(e){
    setFriend({
      ...friend,
      [e.target.id]:[e.target.value]
    })
  }

  function addingNewFriend(){

    friend.id = Date.now();
    friend.balance = 0;

    settingInitialFriends(friend);

    setAdding(false);

  }

  return (
    <div id='addFriend'>
      {adding?
      <div className='formContiner'>
      <div className='addForm'>
        <div>
          <label>👩🏼‍🤝‍🧑🏽 Friend name</label>
          <input type="text" id="name" onChange={addFriend} />
        </div>
        <div>
          <label>🖼 Image URL</label>
          <input type="text" id='image' onChange={addFriend} />
        </div>

        <button onClick={addingNewFriend}>Add</button>
      </div>
      <div style={{display:"flex",justifyContent:"flex-end", marginTop:"10px"}}><button id='close' onClick={()=> setAdding(false)}>Close</button></div>
      
      </div>
      :<button onClick={()=> setAdding(true)}>Add Friend</button>}
      
    </div>
  )
}

function Billing(){

  return(
    <div id='billForm'>
      <h2>SPLIT A BILL WITH SARAH</h2>

      <div className='billInputContainer'>
        <label>💰 Bill value</label>
        <input type="text" />
      </div>

      <div className='billInputContainer'>
        <label>🧍‍♂️ Your expense</label>
        <input type="text" />
      </div>

      <div className='billInputContainer'>
        <label>👩🏻‍🤝‍🧑🏼 Sarah's expense:</label>
        <input type="text" />
      </div>

      <div className='billInputContainer'>
        <label>🤑Who is paying the bill?</label>
        <select>
          <option value="You">You</option>
          <option value="Sarah">Sarah</option>
        </select>
      </div>

      <div id='billSubmitBtn'>
        <button>Split bill</button>
      </div>

    </div>
  )


}


export default App
