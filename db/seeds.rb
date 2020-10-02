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
  title: "Bryan Park - No Camping!",
  description: "Stop camping here, please! Don't trust the signs!",
  address: "4308 Hermitage Rd, Richmond, VA 23227",
  types: "rv",
  reviews: 20,
  rating: 78,
  longitude: -77.474441,
  latitude: 37.592800,
  price: 0,
  capacity: 5
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

poca = Location.new(
  title: "Pocahontas State Park",
  description: "One of the top three mountain biking destinations of the east coast",
  address: "10301 State Park Rd, Chesterfield, VA 23832",
  types: "camping rv cabin",
  reviews: 843,
  rating: 12,
  longitude: -77.3437,
  latitude: 37.22108,
  price: 45,
  capacity: 180
)

poca1 = URI.open("https://cabins-seeds.s3.amazonaws.com/poca_1.jpg")
poca2 = URI.open("https://cabins-seeds.s3.amazonaws.com/poca_2.jpg")
poca3 = URI.open("https://cabins-seeds.s3.amazonaws.com/poca_3.jpg")
poca4 = URI.open("https://cabins-seeds.s3.amazonaws.com/poca_4.jpg")

poca.photos.attach(io: poca1, filename: 'poca_1.jpg')
poca.photos.attach(io: poca2, filename: 'poca_2.jpg')
poca.photos.attach(io: poca3, filename: 'poca_3.jpg')
poca.photos.attach(io: poca4, filename: 'poca_4.jpg')

poca.save!

# Seeding attachments with AWS:
# make the bucket public during seeding, and copy URLs for each file:

# require 'open-uri'

# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')