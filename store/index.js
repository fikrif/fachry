import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "E-Commerce Catalog",
      category: "Web Application",
      img: "images/cover_ecommerce.png",
      publishDate: "Jan 20, 2024",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "🖥️ Project-Based Virtual Intern: Front End Developer Core Initiative Studio x Rakamin Academy",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/1project_man_section.png",
        },
        {
          id: uuidv4(),
          title: "E-Commerce Catalog",
          img: "../images/1project_women_section.png",
        },
        {
          id: uuidv4(),
          title: "E-Commerce Catalog",
          img: "../images/2project_man_section.png",
        },
        {
          id: uuidv4(),
          title: "E-Commerce Catalog",
          img: "../images/2project_women_section.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Core Initiative Studio",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://github.com/fachry99/ecommerce-catalog",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "I work as a Front-End Developer intern at Core Initiative and am responsible for developing two pages for an e-commerce website, namely the men's clothing and women's clothing pages. work with the UI/UX team and the Backend team to ensure that the website has complete design components and API code.",
        },
        
      ],
      socialSharings: [
        // {
        //   id: uuidv4(),
        //   name: "Twitter",
        //   icon: "twitter",
        //   url: "https://twitter.com/realstoman",
        // },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/fachry-/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Scholarship Registration",
      category: "Web Application",
      img: "images/cover_bnsp_frame1.png",
      publishDate: "dec 04, 2023",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "description",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Scholarship Registration",
          img: "../images/cover_bnsp_frame1.png",
        },
        {
          id: uuidv4(),
          title: "Scholarship Registration",
          img: "../images/bnsp_frame2.png",
        },
        {
          id: uuidv4(),
          title: "Scholarship Registration",
          img: "../images/bnsp_frame3.png",
        },
        {
          id: uuidv4(),
          title: "Scholarship Registration",
          img: "../images/bnsp_frame4.png",
        },

      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "BNSP (National Professional Certification Agency)",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "fullstack developer",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "bootstrap",
        "php",
        "mysql",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:"Implementing User Interface. Implementing Text, Graphics, and Multimedia Programming Language Execution Commands. Arranging Functions, Files, or Other Programming Resources in a Neat Organization. Write Code with Principles According to Guidelines and Best Practices.",
        },
      ],
      socialSharings: [
        // {
        //   id: uuidv4(),
        //   name: "Twitter",
        //   icon: "twitter",
        //   url: "https://twitter.com/realstoman",
        // },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/fachry-/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Mobile App Laundry Yuk",
      category: "UI/UX Design",
      img: "images/Portofolio Pyoyek Capstone(A).png",
      publishDate: "Jun 04, 2023",
      tag: "UI/UX ",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "workers and students to save their time so that it can be used for other activities",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Mobile App Laundry Yuk",
          img: "../images/Frame thambnail.png",
        },
        {
          id: uuidv4(),
          title: "Mobile App Laundry Yuk",
          img: "../images/inti_ui_laundryyuk.png",
        },
        {
          id: uuidv4(),
          title: "Mobile App Laundry Yuk",
          img: "../images/Ui_order_laundryyuk.png",
        },
        {
          id: uuidv4(),
          title: "Mobile App Laundry Yuk",
          img: "../images/Frame_all_ui_laundryyuk.png",
        },
        {
          id: uuidv4(),
          title: "Mobile App Laundry Yuk",
          img: "../images/bmc_laundry_yuk.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Project capstone at Bisa.AI Indonesia",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Ui/UX Design",
        },
        {
          id: uuidv4(),
          title: "Figma Prototype",
          // details: "https://www.figma.com/proto/GlksvMQntMQOaT8HeASqpy/Laundry-App?type=design&node-id=355-862&scaling=scale-down&page-id=0%3A1&starting-pointnode-id=355%3A862",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      technologies: [
        "Figma",
        "Whimsical",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "Laundry Yuk is an application that provide services, where users can choose a shop/service provider based on recommendations, and can see the process of clothing to what extent, you can use clothing delivery service to customers",
        },
        {
          id: uuidv4(),
          details: "Feature in the planning: Recommendation Feature pick up, Delivery service, and Progress track feature",
        },
        {
          id: uuidv4(),
          details:
            "I'm create case studies including business model canvas, empty mapping, user persona, user perfective, Idea Prioritization Matrix, crazy eight, and prototype app in Figma",
        },
        {
          id: uuidv4(),
          details:
            "Link for prototype: https://www.figma.com/proto/GlksvMQntMQOaT8HeASqpy/Laundry-App?type=design&node-id=355-862&scaling=scale-down&page-id=0%3A1&starting-pointnode-id=355%3A862",
        },
      ],
      socialSharings: [
        // {
        //   id: uuidv4(),
        //   name: "Twitter",
        //   icon: "twitter",
        //   url: "https://twitter.com/realstoman",
        // },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/fachry-/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
      title: "UI Health App: Medigo",
      category: "UI Design",
      img: "images/cover_medigo_app.png",
      publishDate: "May 17, 2023",
      tag: "UI Design",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "UI Design Medigo App",
          img: "../images/Frame 1.png",
        },
        {
          id: uuidv4(),
          title: "UI Design Medigo App",
          img: "../images/Frame 2.png",
        },
        {
          id: uuidv4(),
          title: "UI Design Medigo App",
          img: "../images/Frame 3.png",
        },
        {
          id: uuidv4(),
          title: "UI Design Medigo App",
          img: "../images/crazy eight medigo.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Project Capstone at Bisa.AI Indonesia",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details:"-",
        },
      ],
      technologies: [
        "Figma",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Medigo is an online health application allows users to consult with a doctor, buying medicine, and making an appointment meet with a doctor offline. Users can easily access health services comprehensively via their mobile phone.",
        },
        {
          id: uuidv4(),
          details:
            "Link for prototype: https://www.figma.com/proto/zXClpNwiiOcP2xSc6m2jq8/UI-Medigo-App?type=design&node-id=124-1466&t=B2a6yRCEgcknjEmF-1&scaling=scale-down&page-id=124%3A1461&starting-point-node-id=124%3A1499&mode=design",
        },
        
      ],
      socialSharings: [
        // {
        //   id: uuidv4(),
        //   name: "Twitter",
        //   icon: "twitter",
        //   url: "https://twitter.com/realstoman",
        // },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/fachry-/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
      title: "X Uniersity New Student Registration",
      category: "Web Application",
      img: "images/cover_x_university.png",
      publishDate: "Aug 04, 2023",
      tag: "Frontend Development",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "New student who want to registration at X University.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "X Uniersity New Student Registration",
          img: "../images/1_x_university.png",
        },
        {
          id: uuidv4(),
          title: "X Uniersity New Student Registration",
          img: "../images/2_x_university.png",
        },
        {
          id: uuidv4(),
          title: "X Uniersity New Student Registration",
          img: "../images/3_x_university.png",
        },

      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Web Programming Class Project",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Php",
        "MySQL",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
          "Website Display Implementing HTML, CSS, and JavaScript. Display and add data from the database, with PHP programming language, MySQL database."
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        // {
        //   id: uuidv4(),
        //   name: "Twitter",
        //   icon: "twitter",
        //   url: "https://twitter.com/realstoman",
        // },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/fachry-/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
      title: "Apple Design System",
      category: "Web Application",
      img: "images/web-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
  ],
  
  aboutMe: [
    {
      id: uuidv4(),
      bio: "I am a final-year student in Informatics with a passion for web development. I specialize in front-end development and UI/UX design for both web and mobile applications. I am confident that with the knowledge and skillset I have gained through my undergraduate study, I will be able to contribute, learn, and hopefully improve myself in any future internship programs I will join when given the opportunity.",
    },
    {
      id: uuidv4(),
      bio: "If you are looking for a skilled and dedicated front-end developer or UI/UX designer, I would be a great addition to your team. Please feel free to contact me to learn more about my skills and experience. Thank you for your time and consideration!",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/fachry99",
    },
    // {
    //   id: uuidv4(),
    //   name: "Twitter",
    //   icon: "twitter",
    //   url: "https://twitter.com/realstoman",
    // },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/fachry-/",
    },
    // {
    //   id: uuidv4(),
    //   name: "Youtube",
    //   icon: "youtube",
    //   url: "https://youtube.com/c/realstoman",
    // },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
