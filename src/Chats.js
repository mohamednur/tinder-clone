import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah Brown"
        message="Hey how are you?"
        timestamp=" 3 minutes ago"
        profilePic="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
      <Chat
        name="Natasha Red"
        message="Hey how are you?"
        timestamp="3 days ago"
        profilePic="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
      <Chat
        name="Ben Parker"
        message="Whats up?"
        timestamp="45 minutes ago"
        profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
      <Chat
        name="Oliver Sjoslker"
        message="Hey how are you?"
        timestamp="15 minutes ago"
        profilePic="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
    </div>
  );
}

export default Chats;
