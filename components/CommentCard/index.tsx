import React from "react";
import styles from "./CommentCard.module.scss";
import { IComments } from "../../types";

interface ICardProps {
   comment: any;
}

type ICard = IComments & ICardProps;

const CommentCard: React.FC<ICard> = ({
	comment
}) => {
	return (
        <li>	
			<div className={styles.comment}>
				<h3 className={styles.comment__title}>
                    {comment.name}
                </h3>
                <p className={styles.comment__text}>
                    {comment.body}
                </p>
                <p className={styles.comment__email}>
                    {comment.email}
                </p>
			</div>
		</li>
	)
}

export default CommentCard;