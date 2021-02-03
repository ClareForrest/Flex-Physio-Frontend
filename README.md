## Purpose:

Our client, Flex Physio, is a successful physio business that is expanding to several locations across Melbourne. They want a custom designed website that tracks their patient's history, allows online bookings and attaches their primary physiotherapist to their client profile. 

Flex Physio would like for their patients to be able to create a user profile, make bookings online, update their personal information and view their booking history. They also want clients to be able to make payments through the application, as well as automatically generate relevant emails to clients, such as a booking confirmation or cancellation notice. 

They additionally want the physio team to be able to set their availability, edit and delete client bookings and view their calendar for all upcoming appointments. 

Flex Physio also has additional stretch features they'd like to see implemented if possible within the permitted timeframe for the application's launch. 

## Functionality / features: 

### MVP: 

- Create, view, delete functionality available on bookings
- Authentication features using JSON Web Tokens and third party app, Knock
- Mailer functionality using third party, SendGrid, for booking confirmations
- Create new login, view and edit details functionality available for clients 
- Visualisation of office location using geocoding third party
- Online payment available using third party app, Stripe

### Future Planning:  

- Client/Physio conditional rendering of views 
- Physios ability to edit/delete client appointments   
- Conditional payments (upfront or retroactive dependant on user status(new, existing) 
- Bookings conditional on payment status (paid/outstanding)
- Messaging: appointment confirmation/changes

## Target audience:

Our target audience are clients requiring physiotherapy who are seeking to employ the services of an exciting and growing physiotherapist business with multiple locations and a large team of physios. The business seeks to attract clients who prefer to utilise online booking services, and we have been commissioned to see this need is met.

More specifically, the target audience exists in the age demographic of 18-40, and includes members of both sexes within the greater Melbourne area.  The members of this demographic will be fit and there will be an emphasis on treating sports and fitness related injuries.

## Tech stack:

**Application and Data:**

- Ruby on Rails
- JavaScript
- React.js
- PostgreSQL
- Bootstrap
- CSS/SCSS
- Heroku
- Netlify

**Utilities:**

- Amazon S3/AWS
- Stripe
- SendGrid
- Geolocation
- Calendar app

**Dev Ops:**

- GitHub
- VS Code


## R4. User Stories:
Our site was built with the following user stories in mind.

As a physio, I want to set my availabilities so I can work flexibly around my schedule
As a physio, I want to view my client's bookings so I can confirm times & dates 
As a physio, I want to view all client bookings so I can have a general overview of what is occurring at the physio practice 
As a physio, I want to view my client's medical profile and contact details so I can plan therapy sessions & contact clients with queries 
As a physio, I want to be able to contact my clients to inform them of any changes/updates
As a physio, I want edit my client bookings in case unforeseen circumstances occur forcing my client or me to change session times/dates 
As a physio, I want to cancel my client bookings in the case of unforeseen circumstances
As a client, I want to view all available bookings so that I can select one/make a booking
As a client, I want to view my current bookings so that I can plan for this
As a client, I want to be able to delete my booking so that I can cancel if needed 
As a client, I want to book an appointment online so that I don't have to call the practise
As a client, I want to update my patient info (address/contact details) so that I can ensure it is up-to-date/correct
As a client, I want to view previous bookings(booking history) so that I can monitor my progress