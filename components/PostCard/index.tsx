import React from "react";
import Link from "next/link";
import styles from "./PostCard.module.scss";
import { IPosts } from "../../types";

interface ICardProps {
   post: any;
}

type ICard = IPosts & ICardProps;

const PostCard: React.FC<ICard> = ({
	post
}) => {
	return (
        <li>
            <Link href={`/posts/${post.id}`}>
				<a>	
                    <div className={styles.post}>
                        <h3 className={styles.post__title}>
                            {post.title}
                        </h3>
                        <p className={styles.post__text}>
                            {post.body}
                        </p>
            
                    </div>
                </a>
            </Link>
		</li>
	)
}

export default PostCard;