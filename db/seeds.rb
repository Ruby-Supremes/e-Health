# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding"


puts "Seeding doctors"
Doctor.create!([
  {name: "John Brown", specialization: "cardiologist", experience: " Years", image: "#" },
  {name: "Liza Addison", specialization: "neurose sergeon", experience: " Years", image: "#" },
  {name: "Mark Evanz", specialization: "dermatologist", experience: " Years", image: "#" },
  {name: "Daniella Martins", specialization: "orthopedic sergeon", experience: " Years", image: "#" },
  {name: "Rosey Jean", specialization: "gynaecologist", experience: " Years", image: "#" },
  {name: "Jessica Eve", specialization: "paedetrician", experience: " Years", image: "#" },
  {name: "Racheal Ross", specialization: "opthamalic sergeon", experience: " Years", image: "#" },
  {name: "Zayn Lion", specialization: "andrologist", experience: " Years", image: "#" },
  {name: "Mary Linda", specialization: "dentist", experience: " Years", image: "#" },
  {name: "Daniel Jones", specialization: "oncologist", experience: " Years", image: "#" },
  {name: "Abraham Daves", specialization: "otolaryngology", experience: " Years", image: "#" },
])
puts "seeding patients"
Patient.create!([

   { name: "Aaran Kibs",
     nationality: "Korean",
     date_of_birth: "21062000",
     address: "peetford",
     occupation: "teacher",
     email: "#",
     gender: "S",
     allegies: "peanut",
     age: "22"
   },

   { name: "Aaren Yeager",
     nationality: "Japanese",
     date_of_birth: "06021994",
     address: "langata",
     occupation: "engineer",
     email: "#",
     gender: "M",
     allegies: "none",
     age: "28"
   },

   { name: "Aaran Kibs",
     nationality: "Korean",
     date_of_birth: "21062000",
     address: "monrovia lane",
     occupation: "teacher",
     email: "#",
     gender: "S",
     allegies: "peanut",
     age: "22"
   },

   { name: "Hermadine Smith",
     nationality: "SouthAfrican",
     date_of_birth: "01172001",
     address: "utawala",
     occupation: "data scientist",
     email: "#",
     gender: "F",
     allegies: "kiwi",
     age: "17"
   },

   { name: "Melisa Lonte",
     nationality: "Kenyan",
     date_of_birth: "21062000",
     address: "jamhuri",
     occupation: "teacher",
     email: "#",
     gender: "S",
     allegies: "peanut",
     age: "22"
   }
])

puts "Done seeding"
