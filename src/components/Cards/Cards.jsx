import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ id, title, price, description, category, image, rating, count }) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={image} alt={title} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardCategory}>{category}</p>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.cardPriceRating}>
                    <span className={styles.cardPrice}>${price}</span>
                    <span className={styles.cardRating}>
                        <span className={styles.starIcon}>⭐</span> {rating}
                    </span>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <span className={styles.cardCount}>Count: {count}</span>
            </div>
        </div>
    );
};

export default Cards;