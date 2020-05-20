import React, { useState } from 'react';

const EventPracticeStateless = () => {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('User Name')
  const [message, setMessage] = useState('');
  const [storedMessage, setStoredMessage] = useState('Input Message');
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);

  const onSubmit = () => {
    setStoredUsername(username)
    setStoredMessage(message)

    setUsername('');
    setMessage('');
  }
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <div>
      <div>Event Test - UserName: {storedUsername} - MSG: {storedMessage} </div>
      <input 
        type="text"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="Input Message"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default EventPracticeStateless;