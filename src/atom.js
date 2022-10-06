import { atom } from 'recoil';

export const signupState = atom({
    key: 'signupState',
    default: {}
});

export const loginState = atom({
    key: 'loginState',
    default: {},
});

export const newPostState = atom({
    key: 'newPostState',
    default: {
        projectName: "",
        intro: "",
        skill: "",
        phoneNumber: "",
        category: "",
        imageUrl: ""
    },
})

export const categoryState = atom({
    key: 'categoryState',
    default: ''
});

export const sortState = atom({
    key: 'sortState',
    default: '정렬'
});