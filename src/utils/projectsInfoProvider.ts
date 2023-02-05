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
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
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
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
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
