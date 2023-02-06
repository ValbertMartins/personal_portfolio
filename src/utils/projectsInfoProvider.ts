interface ProjectProps {
  title: string
  description: string
  images?: string[]
  links: {
    githubRepo: string
    deployLink?: string
  }
}

export const projects: ProjectProps[] = [
  {
    title: "Ecommerce",
    description:
      "E-commerce built-in with ReactJS, typescript, styled-components, integration with stripe to process payments, integration with strapi CMS to consume admin dashboard, and authentication with jWT.",
    images: [
      "src/assets/images/projectsImages/project1/image1.png",
      "src/assets/images/projectsImages/project1/image2.png",
      "src/assets/images/projectsImages/project1/image3.png",
      "src/assets/images/projectsImages/project1/image4.png",
      "src/assets/images/projectsImages/project1/image5.png",
      "src/assets/images/projectsImages/project1/image6.png",
    ],
    links: {
      githubRepo: "https://github.com/ValbertMartins/ecommerce",
    },
  },

  {
    title: "React Dogs",
    description:
      "Social Media built-in using reactJS, Css modules, JWT to authentication, axios to consume API, and victory lib to provide graphs.",
    images: [
      "src/assets/images/projectsImages/project2/image1.png",
      "src/assets/images/projectsImages/project2/image2.png",
      "src/assets/images/projectsImages/project2/image3.png",
      "src/assets/images/projectsImages/project2/image4.png",
      "src/assets/images/projectsImages/project2/image5.png",
      "src/assets/images/projectsImages/project2/image6.png",
    ],
    links: {
      githubRepo: "https://github.com/ValbertMartins/Dogs-socialMedia-clone",
      deployLink: "https://dog-social-media.netlify.app/",
    },
  },
]
