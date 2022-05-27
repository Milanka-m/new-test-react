import { AxiosPromise } from "axios";
import { axios } from "../../core";

export default {
    show: (link: number): AxiosPromise => axios.get(`/posts?userId=${link}`),
    showOne: (link: number): AxiosPromise => 
        axios.get(`/posts/${link}`),
};