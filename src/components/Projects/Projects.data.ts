interface ProjectsData {
    id: number
    image: string
    company: string,
    architecture: string
    engineering: string
    meters: string
    local: string
}

export const projects: Array<ProjectsData> = [
    {
        id: 1,
        image: "/images/projects/ninenine-corporation-projects-01.jpg",
        company: "Lorem Ipsum",
        architecture: "Ipsum",
        engineering: "Lorem",
        meters: "5.800m²",
        local: "Place"
    },
    {
        id: 2,
        image: "/images/projects/ninenine-corporation-projects-02.jpg",
        company: "Lorem Ipsum",
        architecture: "Ipsum",
        engineering: "Lorem",
        meters: "5.800m²",
        local: "Place"
    },
    {
        id: 3,
        image: "/images/projects/ninenine-corporation-projects-03.jpg",
        company: "Lorem Ipsum",
        architecture: "Ipsum",
        engineering: "Lorem",
        meters: "5.800m²",
        local: "Place"
    },
    {
        id: 4,
        image: "/images/projects/ninenine-corporation-projects-04.jpg",
        company: "Lorem Ipsum",
        architecture: "Ipsum",
        engineering: "Lorem",
        meters: "5.800m²",
        local: "Place"
    }
]