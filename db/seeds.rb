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
    {name: "John Brown", specialization: "cardiologist", experience: "5 Years", image: "https://image.freepik.com/free-vector/smiley-doctor-with-clipboard-stethoscope_23-2147657761.jpg" },
    {name: "Liza Addison", specialization: "neurose sergeon", experience: "6 Years", image: "https://image.freepik.com/free-vector/therapist-physician-doctor_82574-5381.jpg" },
    {name: "Mark Evanz", specialization: "dermatologist", experience: "10 Years", image: "https://img.freepik.com/free-vector/smiley-female-doctor-with-clipboard-stethoscope_23-2147657762.jpg" },
    {name: "Daniella Martins", specialization: "orthopedic sergeon", experience: "15 Years", image: "https://image.freepik.com/free-vector/female-doctor-pointing-clipboard_23-2147791255.jpg" },
    {name: "Rosey Jean", specialization: "gynaecologist", experience: "17 Years", image: "https://plus.unsplash.com/premium_photo-1661270443521-390dd7111b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" },
    {name: "Jessica Eve", specialization: "paedetrician", experience: "20 Years", image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" },
    {name: "Racheal Ross", specialization: "opthamalic sergeon", experience: "8 Years", image: "https://unsplash.com/photos/DPEPYPBZpB8" },
    {name: "Zayn Lion", specialization: "andrologist", experience: "9 Years", image: "https://www.istockphoto.com/photo/shot-of-a-young-female-doctor-using-her-digital-tablet-in-her-office-gm1357522286-431400358" },
    {name: "Mary Linda", specialization: "dentist", experience: "2 Years", image: "https://www.istockphoto.com/photo/im-making-a-positive-contribution-to-my-community-and-society-gm593305070-101809651" },
    {name: "Daniel Jones", specialization: "oncologist", experience: "3 Years", image: "https://www.istockphoto.com/photo/confident-senior-doctor-gm1342134414-421661076" },
    {name: "Abraham Daves", specialization: "otolaryngology", experience: "7 Years", image: "https://media.istockphoto.com/photos/middle-eastern-nurse-wearing-face-mask-at-hospital-picture-id1307543588?k=20&m=1307543588&s=612x612&w=0&h=babdb1BrmsLJmo-4DAb5YrIe2tPFW5YWNOAB769Psh8=" }
])

puts "seeding users"
User.create!([

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
