import assets from '../../assets/assets'

const projects = [
  {
    projectName: 'Bogholderiet',
    projectDescription: 'Bogholderiet is a task management system. The front end is build in React + Vite and backend in Laravel. The web app has the following features, Adding, Editing and deleting the employees, customers, tasks groups, tasks, task managmenet system and so on.',
    buttonOne: 'See Live',
    buttonTwo: 'Source Code',
    buttonOneLink: 'https://task-management-system-sand.vercel.app/',
    buttonTwoLink: 'https://github.com/ZaidAli3642/task-management-system',
    coverImage: assets.cover.bogholderietCover,
  },
  {
    projectName: 'Smart Brain',
    projectDescription: 'Smart Brain is a complex application which uses the Clarifai API that detects the face of a single person through submitting URL. It also has the functionality of Register and signin users and all the information will be stored in the Postgres Database. It also show the rank of a person that how many times the user detect an image.',
    buttonOne: 'See Live',
    buttonTwo: 'Source Code',
    buttonOneLink: 'https://smart-brain-nextjs.vercel.app/',
    buttonTwoLink: 'https://github.com/ZaidAli3642/smart-brain-nextjs',
    coverImage: assets.cover.smartBrainCover,
  },
  {
    projectName: 'Bus Tracking System',
    projectDescription: 'Bus Tracking system is a web and android application that will help parent to tracking their children school bus. User can use google maps to track school bus, emergency alerts, real time communication and so on.',
    buttonOne: 'Android Code',
    buttonTwo: 'Web Code',
    buttonOneLink: 'https://github.com/ZaidAli3642/Bus-Tracking-Mobile-App',
    buttonTwoLink: 'https://github.com/ZaidAli3642/bus-tracker-web-application',
    coverImage: assets.cover.busTrackingSystemCover,
  },
  {
    projectName: 'Moshify',
    projectDescription: 'Moshify is a simple PSD to HTML/CSS convert project. It has the Navbar, Hero, Plans, Feedback, Project sections. The animation is implemented using AOS.',
    buttonOne: 'See Live',
    buttonTwo: 'Source Code',
    buttonOneLink: 'https://moshify-web-app.netlify.app/',
    buttonTwoLink: 'https://github.com/ZaidAli3642/Moshify',
    coverImage: assets.cover.moshifyCover,
  },
  {
    projectName: 'ROBO FRIENDS',
    projectDescription: 'Robo Friends is a simple Application where you can find multiple robos. Robo Friend uses robohash API which generates the multple random robots and also you can filter the robots as well.',
    buttonOne: 'See Live',
    buttonTwo: 'Source Code',
    buttonOneLink: 'https://zaidali3642.github.io/robofriends/',
    buttonTwoLink: 'https://github.com/ZaidAli3642/robofriends',
    coverImage: assets.cover.roboFriendsCover,
  },
  {
    projectName: 'DevArena',
    projectDescription: 'DevArena is an android application for Developers. It allows to post a query and get response, follow other users, creating groups, compile code and get outputs in four languages (C, C++, JavaScript, python).',
    buttonOne: 'Android Code',
    buttonTwo: 'Backend Code',
    buttonOneLink: 'https://github.com/ZaidAli3642/DevArena-Project',
    buttonTwoLink: 'https://github.com/ZaidAli3642/devarena-api',
    coverImage: assets.cover.devArenaCover,
  },

  {
    projectName: 'DevArena Chat Application',
    projectDescription: 'DevArena is a chat application for both Android and iOS. User can have the following features like register (Passwords will be stored as hash so nobody can read it from database), login, search by username or name, messaging but still there are so much things to do like the chat rooms. The Frontend part is built using React Native with Native-Base, Redux, Redux-Saga, Redux Persist, Socket-io. Backend part is implemented using Node JS, Express JS and socket.io.',
    buttonOne: 'Frontend Code',
    buttonTwo: 'Backend Code',
    buttonOneLink: 'https://github.com/ZaidAli3642/Dev-Arena-Chat-Application',
    buttonTwoLink: 'https://github.com/ZaidAli3642/DevArena-Chat-Application-API',
    coverImage: assets.cover.devArenaChatApplicationCover,
  },
]

export default projects
