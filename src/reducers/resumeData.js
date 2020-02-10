import {
} from '../actions/types';

const INITIAL_STATE = {
    resumeItems: [
        {
            title: "Github",
            subTitle: "My Github Page",
            url: "https://www.github.com/marquisgaston",
            keyWords: ["github", "projects","code", "coding"],
            class: "link"
        },
        {
            title: "LinkedIn",
            subTitle: "My Linkedin Profile",
            url: "https://www.linkedin.com/in/marguisgaston",
            keyWords: ["linkedin", "linked","in", "linked-in"],
            class: "link"
        },
        {
            title: "Capstone Project",
            subTitle: "My Capstone Project",
            url: "https://minnmax.netlify.com",
            keyWords: ["projects","code", "coding", "capstone", "my capstone", "project"],
            class: "link"
        },
        
        {
            title: "Capstone Project Info",
            subTitle: "My Capstone Project info",
            localUrl: "/capstone",
            keyWords: ["project", "projects","code", "coding", "capstone", "minnnmax", "bottega", "react", "javascript", "node", "nodejs", "node.js"],
            class: "project"
        },
    ]
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
    
        default: return state
    }
}

