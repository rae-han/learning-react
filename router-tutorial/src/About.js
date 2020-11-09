import React from 'react';
import qs from 'qs'

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';

  return (
    <div>
      <div>about</div>
      { showDetail && <p>detail 값을 true로 설정하셨군요!</p> }
    </div>
  );
};

export default About;