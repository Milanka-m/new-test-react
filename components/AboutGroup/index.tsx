import React from "react";
import styles from "./AboutGroup.module.scss";

const AboutGroup: React.FC = () => {
	return (
        <section className={styles.aboutGroup}>
            <div className={styles.aboutGroup__container}>
                <h2 className={styles.aboutGroup__title}>
                    О группе
                </h2>
                <p className={styles.aboutGroup__text}>
                    Twenty One Pilots — американский дуэт из Колумбуса, 
                    штат Огайо. Группа образовалась в 2009 году и на данный 
                    момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив 
                    самостоятельно выпустил два альбома: Twenty One Pilots 
                    в 2009 и Regional at Best в 2011.
                </p>
            </div>
        </section>
	)
}

export default AboutGroup;