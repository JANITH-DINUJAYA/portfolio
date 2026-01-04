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
      image: "http://localhost:5000/images/luxora.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/Luxora-E-commerce-wordpress-website",
      demoLink: "https://demo-ecommerce.com"
    });

    const project2 = new Project({
      title: "Luxe Vista Mobile Application",
      description: "A Resort App Developed Using Java And Mysql",
      technologies: ["Java", "Mysql"],
      image: "http://localhost:5000/images/luxe.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/Luxe-Vista-Resort-App",
      demoLink: "https://demo-tasks.com"
    });

    const project3 = new Project({
      title: "Shark Portcity Restaurant Website",
      description: "SharkPort City is a comprehensive, full-stack restaurant management web application designed to streamline food ordering, delivery, and restaurant operations. The system includes four dedicated web portals for different user roles: Customer, Driver, Admin, and Staff.",
      technologies: ["JavaScript", "PHP", "Mapbox", "OpenAI", "Payhere", "CSS", "HTML", "Firebase"],
      image: "http://localhost:5000/images/shark.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/shark-port-city-restaurant-website",
      demoLink: "https://sharkportcity.com"
    });
     
    const project4 = new Project({
      title: "My Portfolio",
      description: "A Portfolio Website Developed Using Mern Tech Stack",
      technologies: ["React.js","Node.js","Express.js","MongoDb"],
      image: "http://localhost:5000/images/portfolio.png",
      githubLink: "https://github.com/JANITH-DINUJAYA/Luxe-Vista-Resort-App",
      demoLink: "https://demo-tasks.com"
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