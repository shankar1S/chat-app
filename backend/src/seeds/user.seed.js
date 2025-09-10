import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
{
  email: "priya.sharma@example.com",
  fullName: "Priya Sharma",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
},
{
  email: "ananya.verma@example.com",
  fullName: "Ananya Verma",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
},
{
  email: "isha.patel@example.com",
  fullName: "Isha Patel",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
},
{
  email: "sneha.kumar@example.com",
  fullName: "Sneha Kumar",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
  email: "aarti.singh@example.com",
  fullName: "Aarti Singh",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
},
{
  email: "meera.jain@example.com",
  fullName: "Meera Jain",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
},
{
  email: "radhika.nair@example.com",
  fullName: "Radhika Nair",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
},
{
  email: "kavya.reddy@example.com",
  fullName: "Kavya Reddy",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
},

// Male Users
{
  email: "arjun.menon@example.com",
  fullName: "Arjun Menon",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
},
{
  email: "rahul.gupta@example.com",
  fullName: "Rahul Gupta",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
},
{
  email: "vikram.singh@example.com",
  fullName: "Vikram Singh",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
},
{
  email: "sachin.patel@example.com",
  fullName: "Sachin Patel",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
},
{
  email: "rohan.jain@example.com",
  fullName: "Rohan Jain",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
  email: "amit.kumar@example.com",
  fullName: "Amit Kumar",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
},
{
  email: "deepak.nair@example.com",
  fullName: "Deepak Nair",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
},
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
