import { AxiosPromise } from "axios";
import { axios } from "../../core";

export default {
	show: (): AxiosPromise => axios.get("/users"),
    showOne: (link: number): AxiosPromise => axios.get(`/users/${link}`),
};