# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.new(
  fname: 'jimmy',
  lname: 'trees',
  password: 'dondondon',
  email: 'don@don.don',
  zipcode: '99723',
  bio: 'demo user'
)

liza = User.new(
  fname: 'liza',
  lname: 'grishaeva',
  password: 'lizaloo',
  email: 'lizagris@she.daddy',
  zipcode: '23220',
  bio: 'a southern girl that loves hiking hates bugs with equal passion'
)

demo.save!
liza.save!


Location.destroy_all

require 'open-uri'

bryan = Location.new(
  description: "Spacious park with fields",
  address: "4308 Hermitage Rd, Richmond, VA 23227",
  types: "camping",
  longitude: -77.474441,
  latitude: 37.592800,
  price: 0,
  capacity: 50
)

bryan1 = URI.open("http://cabins-seeds.s3.amazonaws.com/bryan_park_1.jpg")
bryan2 = URI.open("http://cabins-seeds.s3.amazonaws.com/bryan_park_2.jpg")
bryan3 = URI.open("http://cabins-seeds.s3.amazonaws.com/bryan_park_3.jpg")
bryan4 = URI.open("http://cabins-seeds.s3.amazonaws.com/bryan_park_4.jpg")
bryan6 = URI.open("http://cabins-seeds.s3.amazonaws.com/bryan_park_6.jpg")
bryan7 = URI.open("http://cabins-seeds.s3.amazonaws.com/bryan_park_7.jpg")

bryan.photos.attach(io: bryan1, filename: 'bryan_park_1.jpg')
bryan.photos.attach(io: bryan2, filename: 'bryan_park_2.jpg')
bryan.photos.attach(io: bryan3, filename: 'bryan_park_3.jpg')
bryan.photos.attach(io: bryan4, filename: 'bryan_park_4.jpg')
bryan.photos.attach(io: bryan6, filename: 'bryan_park_6.jpg')
bryan.photos.attach(io: bryan7, filename: 'bryan_park_7.jpg')

bryan.save!

# Seeding attachments with AWS:
# make the bucket public during seeding, and copy URLs for each file:

# require 'open-uri'

# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')