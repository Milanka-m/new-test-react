import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../layout/Layout";
import styles from "./index.module.scss";
import { PostList } from "../../components";
import { usersApi, postsApi } from "../../stores/api";
import { IUsers, IPosts } from "../../types";

interface ICurrentProps {
	user: IUsers;
    posts: IPosts[];
}

const UserProfile: NextPage<ICurrentProps> = ({ user, posts }) => {
    const [countPostCards, setCountPostCards] = React.useState(0);
    const [initialPostCards, setInitialPostCards] = React.useState<IPosts[]>([]);

    React.useEffect(() => {
        if (posts && posts.length > 0) {
            setInitialPostCards(posts);
        }
    }, [posts]);

    React.useEffect(() => {
        initialPostCards.length >= 2 
        ? setCountPostCards(2) 
        : setCountPostCards(initialPostCards.length)
    }, [initialPostCards]);

    const addMorePosts = () => {
        setCountPostCards(initialPostCards.length);
    }

	return (
		<Layout
			title={`Профиль пользователя ${user && user.username} — Concert CLUB`}
			desc={`Профиль пользователя ${user && user.username} — Concert CLUB`}
			ogTitle={`Профиль пользователя ${user && user.username} — Concert CLUB`}>
			<section className={styles.userProfile}>
                <div className={styles.userProfile__personal}>
                    <div></div>
                    <div className={styles.userProfile__item2}>
                        <h1 className={styles.userProfile__title}>
                            {user.name}
                        </h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <p className={styles.userProfile__text}>
                            {user.address.city}
                        </p>
                    </div>
                    <div>
                        <p className={styles.userProfile__text}>
                            {user.email}
                        </p>
                    </div>
                    <div>
                        <p className={styles.userProfile__text}>
                            {user.phone}
                        </p>
                    </div>
                    <div>
                        <p className={styles.userProfile__text}>
                            {user.website}
                        </p>
                    </div>
                    <div>
                        <p className={styles.userProfile__text}>
                            {user.company.name}
                        </p>
                        <p className={styles.userProfile__text}>
                            {user.company.bs}
                        </p>
                    </div>
                    <div></div>
                </div>
			</section>
            <section className={styles.userPosts}>
                <div className={styles.userPosts__container}>
                    <h2 className={styles.userProfile__title}>
                        Посты
                    </h2>
                    <div className={styles.userPosts__content}>
                        {
                            posts && posts.length > 0 
                            ? <PostList 
                                initialPostCards={initialPostCards}
                                countPostCards={countPostCards} 
                              /> 
                            : <></>
                        }
                        <button 
                            onClick={addMorePosts}
                            className={styles.userPosts__cardLink} 
                        >
                            Посмотреть все
                        </button>
                    </div>
                </div>
            </section>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { link } = params!;
    const userData = await usersApi.showOne(Number(link));
    const postsData = await postsApi.show(Number(link));

	return {
		props: { 
            user: userData.data,
            posts: postsData.data,
        },
	}
}

export default UserProfile;