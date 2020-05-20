import React from 'react';

import Say from './Say.js'
import EventPractice from './EventPractice.js'
import EventPracticeStateless from './EventPracticeStateless.js'
import EventPracticeStatelessObject from './EventPracticeStatelessObject.js'

const EventIndex = () => {
  return (
    <div>
      <Say /> <hr />
      <EventPractice /> <hr />
      <EventPracticeStateless /> <hr />
      <EventPracticeStatelessObject /> <hr />
    </div>
  );
};

export default EventIndex;