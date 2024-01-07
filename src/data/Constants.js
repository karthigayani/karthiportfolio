import MovieApp from '../assets/img/MovieApp.png';
import Sociopedia from '../assets/img/Sociopedia.png';
import Pizzahut from '../assets/img/Pizzahut.png';

const bannerData = {
    toChange: ["FullStack Developer","FrontEnd Developer", "Backend Developer"],
    name: "Karthigayani",
    description:' I am dedicated to utilizing the MERN Stack to design innovative digital solutions, fostering creativity, problem-solving, and contributing to the evolution of the digital landscape.'
  };

  export default bannerData;


  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          name: "Material UI",
          image:
            "data:image/png;base64,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",
        },
      
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
        },
       
      
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
      
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
      ],
    },

    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
       
        {
          name: "Netlify",
          image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
        },
     
        {
          name: "Canva",
          image:
            "data:image/jpeg;base64,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",
        },
      ],
    },
  ];
  export const cardData = [
    {
      image: MovieApp,
      title: 'MovieApp',
      description: 'The purpose of the movie app is user can add movie,edit movie,delete movie. All the CRUD operations are performed.',
      githubLink: 'https://github.com/karthigayani/movie_app_frontend',
      deployedLink: 'https://movie-app-frontend.netlify.app',
      tags: [
        "React Js",
        "MaterialUI",
        "Formik",
        "Node Js",
         "MongoDB",
         "nodemailer",
      ],
    },
    {
      image: Sociopedia,
      title: 'Sociopedia',
      description: 'A simple social media application with users, posts, likes and comments.',
      githubLink: 'https://github.com/karthigayani/sm_frontend',
      deployedLink: 'https://sm-frontend-omega.vercel.app',
      tags: [
        "React Js",
        "Bootstrap",
        "MongoDb",
        "Node Js",
        "Express Js", 
      ],
    },
    {
      image: Pizzahut,
      title: 'Pizza Hut',
      description: 'Easiest way to track your fitness Activity,get your accurate data to achieve next level of yours.',
      githubLink: 'https://github.com/karthigayani/pizza_frontend',
      deployedLink: 'https://pizza-frontend.netlify.app',
      tags: [
        "React Js",
        "Bootstrap",
        "MongoDb",
        "Node Js",
        "Express Js",
      ],
    },
    
  ];