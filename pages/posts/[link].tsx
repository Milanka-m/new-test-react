import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../layout/Layout";
import { 
	CommentsList 
} from "../../components";

import { email, required } from "../../modules/form/validation";
import { Box } from "@mui/material";
import AppForm from "../../modules/views/AppForm";
import { Field, Form, FormSpy } from "react-final-form";
import RFTextField from "../../modules/form/RFTextField";
import FormButton from "../../modules/form/FormButton";
import FormFeedback from "../../modules/form/FormFeedback";
import withRoot from "../../modules/withRoot";
import Popup from "../../modules/views/Popup";

import styles from "./index.module.scss";
import { postsApi, commentsApi } from "../../stores/api";
import { IPosts, IComments } from "../../types";

interface ICurrentProps {
    post: IPosts;
    comments: IComments[];
}

const Post: NextPage<ICurrentProps> = ({ post, comments }) => {
	const [initialCommentsCards, setInitialCommentsCards] = React.useState<IComments[]>([]);
	const [openPopupForm, setOpenPopupForm] = React.useState<boolean>(false);
	const [sent, setSent] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (comments && comments.length > 0) {
            setInitialCommentsCards(comments);
        }
    }, [comments]);

	const handleClickOpenPopupForm = (): void => {
		setOpenPopupForm((pre) => !pre);
	}

	const handleClosePopupForm = (): void => {
		setOpenPopupForm((pre) => !pre);
	}

	const validate = (values: { [index: string]: string }) => {
		const errors = required(["firstName", "email", "сommentText"], values)

		if (!errors.email) {
			const emailError = email(values.email)
			if (emailError) {
				errors.email = emailError
			}
		}

		return errors;
	}

	const handleAddComment = (newComment: IComments | any) => {
		if (newComment) {
			setInitialCommentsCards([...comments, newComment]);
			setSent((pre) => !pre);
			setOpenPopupForm((pre) => !pre);
		}
	}

	// const handleAddComment = async (obj: IComments | any): Promise<void> => {
	// 	try {
	// 		const loc = location.pathname.split("/posts/").pop()!
	// 		const { data } = await commentsApi.create(
    //             Number(loc), 
    //             obj,
    //         );
	// 		console.log(data);
	// 		setInitialCommentsCards([...comments, data]);
	// 		setSent((pre) => !pre);
	// 		setOpenPopupForm((pre) => !pre);
		
	// 	} catch (error) {
	// 		console.error(`Ошибка создания данных: ${error}`);
	// 	}
	// }
	

	const handleSubmit = (values: { [name: string]: string }): void => {
		handleAddComment(
		{
			id: Number(comments.length + 1),
			name: values.firstName,
			email: values.email,
			body: values.сommentText,
		});
	}

	return (
		<React.Fragment>
			<Layout
				title={`Пoст пользователя — Concert CLUB`}
				desc={`Пoст пользователя — Concert CLUB`}
				ogTitle={`Пoст пользователя — Concert CLUB`}>
				<section className={styles.userPost}>
					<div className={styles.userPost__container}>
						<h1 className={styles.userPost__title}>
							{post.title}
						</h1>
						<p className={styles.userPost__text}>
							{post.body}
						</p>
						<div className={styles.userPost__heading}>
							<h2 className={styles.userPost__title}>
								комментарии
							</h2>
							<button 
								id="add-comment"
								className={styles.userPost__btn}
								onClick={handleClickOpenPopupForm}
							>
								Добавить комментарий
							</button>
						</div>
						{
							comments && comments.length > 0 
							? <CommentsList 
								initialCommentsCards={initialCommentsCards}
							/> 
							: <></>
						}
					</div>
				</section>
			</Layout>
			<Popup 
				open={openPopupForm} 
				onClose={handleClosePopupForm}>
				<AppForm>
					<Form
						onSubmit={handleSubmit}
						subscription={{ submitting: true }}
						validate={validate}>
						{({ handleSubmit: handleSubmit2, submitting }: any) => (
							<Box
								component='form'
								onSubmit={handleSubmit2}
								noValidate
								sx={{ mt: 2 }}>
								<Field
									autoFocus
									component={RFTextField}
									disabled={submitting || sent}
									autoComplete='given-name'
									fullWidth
									label='Имя'
									name='firstName'
									required
								/>
								<Field
									autoComplete='Email'
									component={RFTextField}
									disabled={submitting || sent}
									fullWidth
									label='Email'
									margin='normal'
									name='email'
									required
								/>
								<Field
									autoComplete='Text'
									component={RFTextField}
									disabled={submitting || sent}
									fullWidth
									label='Текст комментария'
									margin='normal'
									name='сommentText'
									required
								/>
								<FormSpy subscription={{ submitError: true }}>
									{({ submitError }: any) =>
										submitError ? (
											<FormFeedback error sx={{ mt: 2 }}>
												{submitError}
											</FormFeedback>
										) : null
									}
								</FormSpy>
								<FormButton
									sx={{ mt: 3, mb: 2 }}
									disabled={submitting || sent}
									color='secondary'
									fullWidth>
									{submitting || sent ? "Отправлено" : "Отправить"}
								</FormButton>
							</Box>
						)}
					</Form>
				</AppForm>
			</Popup>
		</React.Fragment>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { link } = params!;
    const postData = await postsApi.showOne(Number(link));
    const commentsData = await commentsApi.showOne(Number(link));
	return {
		props: { 
            post: postData.data,
            comments: commentsData.data,

        },
	}
}

export default withRoot(Post);