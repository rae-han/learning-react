import React, { useState } from 'react';

const EventPracticeStateless = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, 
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  
  const onSubmit = () => {
    console.log(`${username}: ${message}`);
    setForm({
      username: '',
      message: ''
    })
  }
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <div>
      <div>Event Test</div>
      <input 
        type="text"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Input Message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default EventPracticeStateless;