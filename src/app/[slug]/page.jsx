import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src='/p1.jpeg'
                alt='image alt'
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Aleksandar Milosheski</span>

              <span>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='image alt' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et
              magnam incidunt. Libero fugit velit quisquam pariatur. Placeat
              incidunt nemo culpa, est vitae, necessitatibus deserunt dolore
              perspiciatis eos, architecto error.
            </p>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et
              magnam incidunt. Libero fugit velit quisquam pariatur. Placeat
              incidunt nemo culpa, est vitae, necessitatibus deserunt dolore
              perspiciatis eos, architecto error.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et
              magnam incidunt. Libero fugit velit quisquam pariatur. Placeat
              incidunt nemo culpa, est vitae, necessitatibus deserunt dolore
              perspiciatis eos, architecto error.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default page;
