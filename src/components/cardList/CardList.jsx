import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Cart from '../card/Cart';

function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} Recent Post></h1>
      <div className={styles.posts}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
