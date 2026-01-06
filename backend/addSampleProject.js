const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    addProject();
  })
  .catch(err => console.log('❌ MongoDB Error:', err));

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  image: String,
  githubLink: String,
  demoLink: String,
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

async function addProject() {
  try {
    const project1 = new Project({
      title: "Luxora E-Commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product management Using Wordpress",
      technologies: ["Wordpress", "Mysql"],
      image: "/images/luxora.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/Luxora-E-commerce-wordpress-website",
      demoLink: "https://www.youtube.com/embed/6lgXZxPSogQ?si=a-ga_35RiQA6Ovnx"
    });

    const project2 = new Project({
      title: "Luxe Vista Mobile Application",
      description: "A Resort App Developed Using Java And Mysql",
      technologies: ["Java", "Mysql"],
      image: "/images/luxe.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/Luxe-Vista-Resort-App",
      demoLink: "https://www.youtube.com/embed/9FgDnFwwlZU?si=UXGXGMnMzKJF1yYG"
    });

    const project3 = new Project({
      title: "Shark Portcity Restaurant Website",
      description: "SharkPort City is a comprehensive, full-stack restaurant management web application designed to streamline food ordering, delivery, and restaurant operations. The system includes four dedicated web portals for different user roles: Customer, Driver, Admin, and Staff.",
      technologies: ["JavaScript", "PHP", "Mapbox", "OpenAI", "Payhere", "CSS", "HTML", "Firebase"],
      image: "/images/shark.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/shark-port-city-restaurant-website",
      demoLink: "https://www.youtube.com/embed/OG-dz-tbX3s?si=Sts40ClcZuT4C-AA"
    });
     
    const project4 = new Project({
      title: "My Portfolio",
      description: "A Portfolio Website Developed Using Mern Tech Stack",
      technologies: ["React.js","Node.js","Express.js","MongoDb"],
      image: "/images/portfolio.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/portfolio",
      demoLink: "https://www.youtube.com/embed/6SqHTJCK1jA?si=1DIpA66UOvfD8dam"
    });

    await project1.save();
    await project2.save();
    await project3.save();
    await project4.save();

    console.log('✅ Sample projects added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding projects:', error);
    process.exit(1);
  }
}