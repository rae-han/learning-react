import React from 'react';
// import styles from './CSSModule.module.css';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <>
      <div className={`${styles.wrapper} ${styles.inverted} ${styles.local}`}>
        안녕하세요, 저는 <span className="something local">CSS Module!</span>
      </div>
      <div className={cx('wrapper', 'inverted', 'local')}>
        안녕하세요, 저는 <span className="something local">CSS Module!</span>
      </div>
    </>
  );
};

export default CSSModule;