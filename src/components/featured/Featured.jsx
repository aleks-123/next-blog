import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Alex here!</b> Discover my stories and
        creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src='/p1.jpeg'
            alt='this is image post'
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit abet consectetur adipisicing edit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit abet consectetur adipisicing edit. Pariatur
            corporis amet doloremque non sed, itaque velit at eos neque
            excepturi quisquam libero, recusandae tempore. Mollitia expedita sit
            rem ex eius.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
