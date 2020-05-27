import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect (() => {
    console.log('랜더링이 완료되었습니다!')
    console.log({ name, nickname })

    return () => {
      console.log('cleanup', '언마운트되기 전이나 업데이트 되기 직전에 작업을 수행한다.')
      console.log(name)
    }
  }, [name])
  // 클래스형 컴포넌트의 componentDidMount, componentDidUpdate를 합친 형태
  // 두 번째 파라미터로 빈 배열을 넣으면 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않는다.
  // 두 번째 파라미터 배열에 검사하고 싶은 값을 넣어주면 해당 값이 변화할 때 작동한다.
  // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해 주면 된다.

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;