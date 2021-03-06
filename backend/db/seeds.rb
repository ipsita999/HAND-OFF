# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Event.create([
    {name: 'New York Comic Con', date: Date.new(2020,10,7), 
    desc: 'showcase your killer cosplay and meet some celebs',
    img:"https://images.unsplash.com/photo-1570740753915-b7b204e7f2a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
    address: '429 11th avenue', 
    city: 'New York', 
    state: 'NY', 
    zipcode: '10001'}, 
    {name: 'San Diego Comic Con', 
    date: Date.new(2020,9,6), 
    desc: 'showcase your killer cosplay and meet some celebs',
    img:'https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    address: '111 W Harbor Dr', 
    city: 'San Diego', 
    state: 'CA', 
    zipcode: '92101'},
    {name: 'MasterCard Dinner Party', 
    date: Date.new(2020,9,6), 
    desc: 'A luxurious dinner to honor our lovely clients and partners', 
    img:'https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    address: '276 W River Dr', 
    city: 'New York', 
    state: 'NY', 
    zipcode: '92101'},
    {name: 'BMV Exclusive Showing', 
    date: Date.new(2020,4,8), 
    desc: 'showcase your killer cosplay and meet some celebs', 
    img:'https://images.unsplash.com/photo-1559120930-cd75d22f194d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    address: '93 Quarters Dr', 
    city: 'Platform', 
    state: 'CA',
    zipcode: '92101'}])

1.times do
    Profile.create([
        {name:'Olivia', 
        lastname:'Brown',
        email:'olivia@email.com', 
        address:'122 12th street', 
        city: 'New York',
        state: 'New York',
        zipcode:'10001', 
        phone: '535-345-2347'},
        {name:'James', 
        lastname:'White',
        email:'james@email.com', 
        address:'122 145th street', 
        city: 'New York',
        state: 'New York',
        zipcode:'10001', 
        phone: '555-555-555'},
        {name:'Ipsita', 
        lastname: 'Rao',
        email:'ipsita@email.com', 
        address:'111 main avenue', 
        city:'New York',
        state: 'New York',
        zipcode:'10451', 
        phone: '508-234-5856'},
        {name:'Taylor', 
        lastname: 'Blue',
        email:'taylor@email.com', 
        address:'133 first avenue', 
        city:'New York',
        state: 'New York',
        zipcode:'10001', 
        phone: '555-555-555'}
])
end