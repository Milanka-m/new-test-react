import React from "react";
import Link from "next/link";
import styles from "./UserCard.module.scss";
import { IUsers } from "../../types";

interface ICardProps {
   user: any;
}

type ICard = IUsers & ICardProps;

const UserCard: React.FC<ICard> = ({
	user
}) => {
	return (
        <li>	
			<div className={styles.card}>
				<h3 className={styles.card__title}>
                    {user.name}
                </h3>
                <p className={styles.card__text}>
                    {user.address.city}
                </p>
                <Link href={`/users/${user.id}`}>
					<a className={styles.card__navLink}>
                        Смотреть Профиль
                    </a>
				</Link>
			</div>
		</li>
	)
}

export default UserCard;