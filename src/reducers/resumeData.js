import {
} from '../actions/types';

const INITIAL_STATE = {
    resumeItems: [
        {
            title: "Github",
            subTitle: "My Github Page",
            url: "https://www.github.com/marquisgaston",
            keyWords: ["github", "projects","code", "coding"]
        },
        {
            title: "LinkedIn",
            subTitle: "My Linkedin Profile",
            url: "https://www.linkedin.com/in/marguisgaston",
            keyWords: ["linkedin", "linked","in", "linked-in"]
        },
        {
            title: "Capstone Project",
            subTitle: "My Capstone Project",
            url: "https://minnmax.netlify.com",
            keyWords: ["projects","code", "coding", "capstone", "my capstone", "project"]
        },
        {
            title: "Python",
            subTitle: "My Github Page",
            url: "github.com/marquisgaston",
            keyWords: ["github", "projects","code", "coding"]
        },
    ]
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
    
        default: return state
    }
}

