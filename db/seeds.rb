# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding doctors"
Doctor.create!([
  { username: "John Brown", specialization: "cardiologist", experience: "5 Years", image: "https://image.freepik.com/free-vector/smiley-doctor-with-clipboard-stethoscope_23-2147657761.jpg", password: "2233" },
  { username: "Liza Addison", specialization: "neurose sergeon", experience: "6 Years", image: "https://image.freepik.com/free-vector/therapist-physician-doctor_82574-5381.jpg", password: "1122" },
  { username: "Daniella Martins", specialization: "orthopedic sergeon", experience: "15 Years", image: "https://image.freepik.com/free-vector/female-doctor-pointing-clipboard_23-2147791255.jpg", password: "3344" },
  { username: "Rosey Jean", specialization: "gynaecologist", experience: "17 Years", image: "https://plus.unsplash.com/premium_photo-1661270443521-390dd7111b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60", password: "4455" },
  { username: "Mark Evanz", specialization: "dermatologist", experience: "10 Years", image: "https://img.freepik.com/free-vector/smiley-female-doctor-with-clipboard-stethoscope_23-2147657762.jpg", password: "1213" },
  { username: "Jessica Eve", specialization: "paedetrician", experience: "20 Years", image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60", password: "5566" },
  { username: "Racheal Ross", specialization: "opthamalic sergeon", experience: "8 Years", image: "https://unsplash.com/photos/DPEPYPBZpB8", password: "1010" },
  { username: "Zayn Lion", specialization: "andrologist", experience: "9 Years", image: "https://www.istockphoto.com/photo/shot-of-a-young-female-doctor-using-her-digital-tablet-in-her-office-gm1357522286-431400358", password: "6677" },
  { username: "Mary Linda", specialization: "dentist", experience: "2 Years", image: "https://www.istockphoto.com/photo/im-making-a-positive-contribution-to-my-community-and-society-gm593305070-101809651", password: "7788" },
  { username: "Daniel Jones", specialization: "oncologist", experience: "3 Years", image: "https://www.istockphoto.com/photo/confident-senior-doctor-gm1342134414-421661076", password: "9988" },
  { username: "Abraham Daves", specialization: "otolaryngology", experience: "7 Years", image: "https://media.istockphoto.com/photos/middle-eastern-nurse-wearing-face-mask-at-hospital-picture-id1307543588?k=20&m=1307543588&s=612x612&w=0&h=babdb1BrmsLJmo-4DAb5YrIe2tPFW5YWNOAB769Psh8=", password: "8899" },
])

puts "seeding Data"
User.create!([

  { username: "Aaran Kibs",
   nationality: "Korean",
   date_of_birth: "21062000",
   address: "peetford",
   occupation: "teacher",
   allergies: "peanut",
   age: "22",
   password: "1234" },

  { username: "Aaren Yeager",
   nationality: "Japanese",
   date_of_birth: "06021994",
   address: "langata",
   occupation: "engineer",
   allergies: "none",
   age: "28",
   password: "12345" },

  { username: "Aaran Kibs",
   nationality: "Korean",
   date_of_birth: "21062000",
   address: "monrovia lane",
   occupation: "teacher",
   allergies: "peanut",
   age: "22",
   password: "123456" },

  { username: "Hermadine Smith",
   nationality: "SouthAfrican",
   date_of_birth: "01172001",
   address: "utawala",
   occupation: "data scientist",
   allergies: "kiwi",
   age: "17",
   password: "1234567" },

  { username: "Melisa Lonte",
   nationality: "Kenyan",
   date_of_birth: "21062000",
   address: "jamhuri",
   occupation: "teacher",
   allergies: "peanut",
   age: "22",
   password: "12345678" },
])

puts "Seeding Appointments"
doctors = Doctor.all
users = User.all
confirmed_array = [true, false]
doctors.each do |doctor|
  u = users.sample
  d = Date.today + 1.day
  t = Time.new(d.year, d.month, d.day, 8)
  doctor.appointments.create!(
    user_id: u.id,
    appointment_date: d,
    time: t,
    duration: 1,
    confirmed: confirmed_array.sample,
  )

  u = users.sample
  t = Time.new(d.year, d.month, d.day, 9)
  doctor.appointments.create!(
    user_id: u.id,
    appointment_date: d,
    time: t,
    duration: 1,
    confirmed: confirmed_array.sample,
  )

  u = users.sample
  t = Time.new(d.year, d.month, d.day, 11)
  doctor.appointments.create!(
    user_id: u.id,
    appointment_date: d,
    time: t,
    duration: 1,
    confirmed: confirmed_array.sample,
  )
end
puts "Done seeding"
