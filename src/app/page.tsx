'use client'

import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Page() {
    const [guess, setGuess] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`You guessed: ${guess}`);
        setGuess('');
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Guesser</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comic+Sans+MS&display=optional" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Guesser</h1>
                <h3>Guess a number between 1 and 100</h3>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="Enter your guess..."
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>Submit</button>
                </form>
            </main>
        </div>
    );
} 
