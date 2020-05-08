import React from 'react';
import PropTypes from 'prop-types'

// const MyComponentRSC = props => {
//   const { name, children } = props; // 비구조 할당
const MyComponentRSC = ({ name, favoriteNumber, children }) => {
  return (
    <>
      <div>
        나의 새롭고 멋진 컴포넌트 
        {/* 안녕하세요. 제 이름은 {props.name}입니다.<br/>
        child 값은 {props.children}입니다. */}
        안녕하세요. 제 이름은 {name}입니다.<br />
        child 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    </>
  );
};

MyComponentRSC.defaultProps = {
  name: 'defaul name'
}

MyComponentRSC.propTypes = {
  name: PropTypes.string,
  fovoriteNumber: PropTypes.number.isRequired
}

export default MyComponentRSC; // 모듈 내보내기 