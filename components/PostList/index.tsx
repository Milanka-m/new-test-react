import React from "react";
import { IPosts } from "../../types";
import PostCard from "../PostCard";
import styles from "./PostList.module.scss";

interface IPostListProps {
	initialPostCards?: IPosts[];
	countPostCards?: number;
}

const PostList: React.FC<IPostListProps> = ({ 
	initialPostCards,
	countPostCards
}) => {
	return (
		<ul className={styles.postList}>
			{initialPostCards &&
				initialPostCards.slice(0, countPostCards).map((post) => {
					return (
						<PostCard
							key={post.id}
							post={post}
						/>
					)
				})
			}
		</ul>
	)
}

export default PostList;