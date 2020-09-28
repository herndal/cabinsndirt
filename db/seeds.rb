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


# Seeding attachments with AWS:
# make the bucket public during seeding, and copy URLs for each file:

# require 'open-uri'

# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')