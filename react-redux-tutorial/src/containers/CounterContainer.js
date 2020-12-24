import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../store/counter';

const CounterCountainer = ({ number, increase, decrease }) => {
  console.log(number, increase, decrease)
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease}></Counter>
    </div>
  );
};

// 1
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     // console.log('increase');
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   }
// });

// export default CounterCountainer;
export default connect(
  // 1
  // mapStateToProps,
  // mapDispatchToProps,
  // 2
  state => ({
    number: state.counter.number
  }),
  dispatch => bindActionCreators(
    {
      increase, decrease
    },
    dispatch,
  ),
)(CounterCountainer)
