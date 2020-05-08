function BlackDog() {
  this.name = "흰둥이"
  return {
    name: '검둥이',
    bark: function() {
      console.log(`${this.name}: 멍멍!`);
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
  this.name = "흰둥이";
  return {
    name: '검둥이',
    bark: () => {
      console.log(`${this.name}:  멍멍!`)
    }
  }
}

const whiteDog = new WhiteDog();
whiteDog.bark();

// 일반 함수는 자신이 종속된 객체를 this로 가리키며
// 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.