import React, { useState } from "react";
import fakeData from "../../fakeData/data.json";
import FriendDiv from "../Friend/Friend";
import "./friends.css";

const Friends = (props) => {
  const fakeFriends = fakeData;
  const [friends, setFriends] = useState(fakeFriends);

  const handleAddFriends = props.handleAddFriends;

  return (
    <div className="parent">
      {friends.map((friend) => (
        <FriendDiv
          handleAddFriends={handleAddFriends}
          friend={friend}
        ></FriendDiv>
      ))}
    </div>
  );
};

export default Friends;
