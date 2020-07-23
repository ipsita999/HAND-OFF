# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Event.create([{name: 'NYCC', date: Date.new(2020,10,4), desc: 'showcase your killer cosplay and meet some celebs.', address: '429 11th avenue', city: 'New York', state: 'NY', zipcode: '10001'}, {name: 'SDCC', date: Date.new(2020,9,6), desc: 'showcase your killer cosplay and meet some celebs.', address: '111 W Harbor Dr', city: 'San Diego', state: 'CA', zipcode: '92101'}])

15.times do
    Profile.create([{name:'James', email:'email@email.com', address:'122 12th street', city: 'New York',state: 'New York',zipcode:'10001', phone: '555-555-555'},{name:'Ispita', email:'email@email.com', address:'111 main avenue', city:'New York',state: 'New York',zipcode:'10001', phone: '555-555-555'},
    {name:'Taylor', email:'email@email.com', address:'133 first avenue', city:'New York',state: 'New York',zipcode:'10001', phone: '555-555-555'}
])
end