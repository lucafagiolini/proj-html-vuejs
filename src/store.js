import { reactive } from 'vue'

export const store = reactive({

    fatures_cards: [

        {
            title: "buildings",
            icon: "fa-regular fa-building",
            paragraph: "quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        },
        {
            title: "renovate",
            icon: "fa-solid fa-arrows-rotate",
            paragraph: "quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        },
        {
            title: "construct",
            icon: "fa-solid fa-house-chimney",
            paragraph: "quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        },
        {
            title: "exclusive",
            icon: "fa-solid fa-truck",
            paragraph: "quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        },

    ],


    counters: [
        {
            title: "planning applications",
            icon: "fa-solid fa-suitcase",
            count_number: 3534,
        },
        {
            title: "completed projects",
            icon: "fa-regular fa-building",
            count_number: 896,
        },
        {
            title: "trained professionals",
            icon: "fa-solid fa-users",
            count_number: 172,
        },
        {
            title: "international offices",
            icon: "fa-solid fa-globe",
            count_number: 19,
        },
    ],

    core_values: [

        {
            title: "great services",
            icon: "fa-solid fa-house-chimney",
            icon_bg_color: "icon_bg_color_1",
            paragraph: "neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."

        },
        {
            title: "highest standards",
            icon: "fa-solid fa-gear",
            icon_bg_color: "icon_bg_color_2",
            paragraph: "neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },
        {
            title: "professional team",
            icon: "fa-solid fa-users",
            icon_bg_color: "icon_bg_color_3",
            paragraph: "neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },
        {
            title: "creative solutions",
            icon: "fa-regular fa-lightbulb",
            icon_bg_color: "icon_bg_color_4",
            paragraph: "neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },

    ],

    testimonials: [
        {
            name: "harry smith",
            img: "src/assets/images/home-testimonial-84268399.jpg",
            feedback: "no man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property."
        },
        {
            name: "katline jones",
            img: "src/assets/images/home-testimonial-113165296.jpg",
            feedback: "no man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property."
        },

    ]


});
