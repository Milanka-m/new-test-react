import React from "react";
import { IComments } from "../../types";
import CommentCard from "../CommentCard";
import styles from "./CommentsList.module.scss";

interface IListProps {
	initialCommentsCards?: IComments[];
}

const CommentsList: React.FC<IListProps> = ({ 
	initialCommentsCards,
}) => {
	return (
		<ul className={styles.commentsList}>
			{initialCommentsCards &&
				initialCommentsCards!.map((comment) => {
					return (
						<CommentCard
							key={comment.id}
							comment={comment}
						/>
					)
				})
			}
		</ul>
	)
}

export default CommentsList;