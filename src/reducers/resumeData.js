import {
} from '../actions/types';

const INITIAL_STATE = {
    resumeItems: [
        {
            title: "Github",
            subTitle: "My Github Page",
            url: "github.com/marquisgaston"
        },
        {
            title: "React"
        },
        {
            title: "Node.JS"
        },
        {
            title: "Python"
        },
    ]
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
    
        default: return state
    }
}

