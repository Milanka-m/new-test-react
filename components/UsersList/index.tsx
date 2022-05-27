import React from "react";
import { IUsers } from "../../types";
import UserCard from "../UserCard";
import styles from "./UsersList.module.scss";

interface ITicketBuyersProps {
	initialUsersCards?: IUsers[];
	countUsersCards?: number;
}

const TicketBuyers: React.FC<ITicketBuyersProps> = ({ 
	initialUsersCards,
	countUsersCards
}) => {
	return (
		<ul className={styles.ticketBuyers}>
			{initialUsersCards &&
				initialUsersCards.slice(0, countUsersCards).map((user) => {
					return (
						<UserCard
							key={user.id}
							user={user}
							address={user.address}
							company={user.company}
						/>
					)
				})
			}
		</ul>
	)
}

export default TicketBuyers;