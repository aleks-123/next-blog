'use client';

import Link from 'next/link';
import styles from './authLinks.module.css';
import { useState } from 'react';

function AuthLinks() {
  const [open, setOpen] = useState(false);

  const status = 'notAuthenticated';

  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link className={styles.link} href='/login'>
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href='/write'>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div
        className={styles.burger}
        onClick={() => setOpen((oldState) => !oldState)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === 'notAuthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
