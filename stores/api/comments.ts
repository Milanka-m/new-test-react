import { AxiosPromise } from "axios";
import { axios } from "../../core";
import { IComments } from "../../types";

export default {
    create: (postId: number, data: IComments): AxiosPromise => 
        axios.post(`/comments?postId=${postId}`, data),
	show: (): AxiosPromise => axios.get("/comments"),
    showOne: (link: number): AxiosPromise => axios.get(`/comments?postId=${link}`),
};