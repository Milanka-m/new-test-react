import React from "react";
import styles from "./ConcertVenue.module.scss";

const ConcertVenue: React.FC = () => {
	return (
      <section className={styles.concertVenue}>
        <div className={styles.concertVenue__container}>
            <div className={styles.concertVenue__content}>
                <h2 className={styles.concertVenue__title}>
                    О площадке
                </h2>
                <article className={styles.concertVenue__description}>
                    <h3 className={styles.concertVenue__subtitle}>
                        Современная площадка для проведения концертов 
                        и других мероприятий любой сложности.
                    </h3>
                    <p className={styles.concertVenue__text}>
                        Мы предоставляем всю необходимую для организаторов 
                        инфраструктуру и готовые решения под все основные 
                        задачи любого события, а также современное оборудование, 
                        соответствующее самым высоким мировым стандартам. 
                    </p>
                </article>
            </div>
            <form 
                className={styles.concertVenue__form}
                name="application-form"
            >
                <div className={styles.concertVenue__formContainer}>
                    <h3 className={styles.concertVenue__formTitle}>
                        Оставить заявку на проведение концерта
                    </h3> 
                    <fieldset className={styles.concertVenue__formInputContainer}>
                        <section className={styles.concertVenue__formSection}>
                            <input 
                                className={styles.concertVenue__formInput}
                                type="text" 
                                name="application" 
                                id="application" 
                                placeholder="Расскажите о вашем предложении" 
                                required 
                            />
                            <span 
                                className={styles.concertVenue__formInputError}
                                id="application-error">
                            </span>
                        </section>
                    </fieldset>
                </div>
                <fieldset className={styles.concertVenue__formHandlers}>
                    <button 
                        type="submit" 
                        className={styles.concertVenue__formButton}
                    >
                            Отправить
                    </button>
                </fieldset>
            </form>
        </div>
      </section>
	)
}

export default ConcertVenue;