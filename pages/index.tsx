import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import { 
  BanerSlider,
  UsersList,
  ConcertVenue,
  AboutGroup,
} from "../components";
import styles from "./index.module.scss";
import { IUsers } from "../types";
import { usersApi } from "../stores/api";

interface IHomeProps {
	users: IUsers[]
}

const Home: NextPage<IHomeProps> = ({ users }) => {
    const [countUsersCards, setCountUsersCards] = React.useState(0);
    const [initialUsersCards, setInitialUsersCards] = React.useState<IUsers[]>([]);

    React.useEffect(() => {
		    if (users && users.length > 0) {
			    setInitialUsersCards(users);
		    }
	  }, [users]);

    React.useEffect(() => {
		    initialUsersCards.length >= 4 
		    ? setCountUsersCards(4) 
		    : setCountUsersCards(initialUsersCards.length)
	  }, [initialUsersCards]);

	  return (
        <Layout
            title='Главная &nbsp;— Concert CLUB'
            desc='Современная площадка для проведения концертов и других мероприятий любой сложности. Concert CLUB'
            ogTitle='Главная &nbsp;— Concert CLUB'
            >
                <BanerSlider />
                <section className={styles.users}>
                    <div className={styles.users__container}>
                        <div className={styles.users__header}>
                            <h2 className={styles.users__title}>
                                Купили билеты
                            </h2>
                            <p className={styles.users__count}>
                                932/{" "}
                                <span>1000</span>
                            </p>
                        </div>
                        <div className={styles.users__content}>
                            {
                                users && users.length > 0 
                                ? <UsersList 
                                      initialUsersCards={initialUsersCards}
                                      countUsersCards={countUsersCards} 
                                  /> 
                                : <></>
                            }
                            <Link href='/users'>
                                <a className={styles.users__cardLink}>
                                    Посмотреть все
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <ConcertVenue />
                <AboutGroup />
        </Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const users = await usersApi.show()
	return {
		props: { users: users.data },
	}
}

export default Home;