import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Friends from "./Components/Friends/Friends";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState([]);

  const handleAddFriends = (friend) => {
    const newFriend = [...friends, friend];
    setFriends(newFriend);

    let totalSalary = 0;
    for (let i = 0; i < newFriend.length; i++) {
      const friend = newFriend[i];
      totalSalary = totalSalary + friend.salary;
    }
  };

  return (
    <div className="App">
      <Navbar friends={friends} handleAddFriends={handleAddFriends}></Navbar>
      <Friends handleAddFriends={handleAddFriends}></Friends>
    </div>
  );
}

export default App;
