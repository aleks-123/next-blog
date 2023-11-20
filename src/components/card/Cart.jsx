import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='img' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023</span> -
          <span className={styles.category}> Culture</span>
        </div>
        <Link href='/'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          eveniet. Laboriosam debitis dolorum pariatur obcaecati nesciunt
          reiciendis voluptates perferendis facere, distinctio unde assumenda
          fugiat soluta cupiditate et voluptas, officia libero...
        </p>
        <Link className={styles.link} href='/'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Cart;
