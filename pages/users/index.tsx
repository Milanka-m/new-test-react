import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../layout/Layout";
import { UsersList } from "../../components";
import styles from "../index.module.scss";
import { IUsers } from "../../types";
import { usersApi } from "../../stores/api";

interface IPortfolioProps {
	users: IUsers[];
}
const Users: NextPage<IPortfolioProps> = ({ users }) => {
	const [initialUsersCards, setInitialUsersCards] = React.useState<IUsers[]>([]);

    React.useEffect(() => {
		if (users && users.length > 0) {
			setInitialUsersCards(users);
		}
	}, [users])

	return (
		<Layout
			title='Покупатели билетов &nbsp;— Concert CLUB'
			desc='Покупатели билетов &nbsp;— Concert CLUB'
			ogTitle='Покупатели билетов &nbsp;— Concert CLUB'>
			<section className={styles.users}>
				<div className={styles.users__container}>
					<h1 className={styles.users__title}>Купили билеты</h1>
					<div className={styles.users__content}>
						{initialUsersCards 
                            && initialUsersCards.length > 0 ? (
							    <UsersList initialUsersCards={initialUsersCards} />
						    ) : (
							    <></>
						    )}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const users = await usersApi.show()
	return {
		props: { users: users.data },
	}
}

export default Users;