# Flex-Physio
"using out of the flex-box ideas to work collaboratively on a full-stack project booking system for a small business"

## Links:
Here's a link to our Deployed Website: [Flex Physio](https://flex-physio.netlify.app/)
Here's a link to our GitHub Repo: [Frontend](https://github.com/ClareForrest/flex-frontend) and
GitHub Repo: [Backend](https://github.com/ClareForrest/flex-server)

## Setup Instructions:
**Pre-installation:** Users must have both Rails and React.js installed to run this code

- Clone this repo
-Yarn install to install all required dependencies. These are;
  - "@stripe/stripe-js": "^1.12.0",
  - "@testing-library/jest-dom": "^5.11.4",
  - "@testing-library/react": "^11.1.0",
  - "@testing-library/user-event": "^12.1.10",
  - "bootstrap": "^4.6.0",
  - "react": "^17.0.1",
  - "react-bootstrap": "^1.4.3",
  - "react-dom": "^17.0.1",
  - "react-router-dom": "^5.2.0",
  - "react-scripts": "4.0.1",
  - "react-select": "^4.0.2",
  - "styled-components": "^5.2.1",

- yarn start to run the server
Load http://localhost:8080/ in the browser
You will also need to complete the setup instructions for the back-end. The link can be found [here](https://github.com/ClareForrest/flex-server)

## Login details:
- Employee user: **Username:** olivia@hotmail.com **Password:** 123456 
- Client-User: **Username:** noah@hotmail.com **Password:** 123456

## Purpose:
Our client, Flex Physio, is a successful physio business that is expanding to several locations across Melbourne. They want a custom designed website that tracks their patient's history, allows online bookings and attaches their primary physiotherapist to their client profile. 

Flex Physio would like for their patients to be able to create a user profile, make bookings online, update their personal information and view their booking history. They also want clients to be able to make payments through the application, as well as automatically generate relevant emails to clients, such as a booking confirmation or cancellation notice. 

They additionally want the physio team to be able to set their availability, edit and delete client bookings and view their calendar for all upcoming appointments. 

Flex Physio also has additional stretch features they'd like to see implemented if possible within the permitted timeframe for the application's launch. 

## App Overview:
### Functionality / features: 
As part of our assessment, we were given a tight timeline to complete the project in, and as such, we opted to group our app ideas into an MVP (minimum viable product) and Future Planning. This was to ensure that we achieved our goal of a working product with features that we deemed important, such as authentication and deployment, but also didn't limit our ideas and enthusiasm for the project at hand. 

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

## Wireframes: 
A link to both mobile and desktop designs is [here](https://drive.google.com/drive/folders/131QncSqVmFVBANAv0Ne0u80FUoCOx6Mi?ths=true)

## R4. User Stories:
Our site was built with the following user stories in mind.
**Employees:**
As an employee, I want to set my availabilities so I can work flexibly around my schedule
As an employee, I want to update my availability as it changes so I can work flexibly around my schedule

**Clients:**
As a client, I want to be able to delete my booking so that I can cancel if needed
As a client, I want to book an appointment online so that I don't have to call the practise
As a client, I want to update my patient info (address/contact details) so that I can ensure it is up- to-date/correct
As a client, I want to view previous bookings(booking history) so that I can monitor my progress
As a client, I want to view all available bookings so that I can select one/make a booking
As a client, I want to view my current bookings so that I can plan for this

**Business Owner:**
As a business owner, I want my clients to be able to set up an account so that I have their contact details as legally and professionally required
As a business owner, I want my clients to be able to edit their personal details so that the business has their correct details
As a business owner, I want to offer the option of online payment so that my clients have choices and invoices are paid

## Planning and Project Management:
**Trello:**
Link to our [Trello Board](https://trello.com/b/6qhxWy0R/final-assessment)
Clare and Chris utilised an AGILE project management strategy in the production of the site. We frequently employed the use of the Kanban tool Trello in pursuing this strategy.
Trello has a number of features that we utilised, these being;
- The ability to create category columns
- The ability to add in cards under each column Colour coded labels
- Member avatars
- Checklists
- Due Date
- The ability to add Attachments

Category columns allowed us to group tasks under broad categories. Some of the categories we used were, "testing", "working on", "checklist for code", "completed" etc. as well as a general "to do".
Beginning with a general checklist allowed us to easily monitor all tasks that required completion. This contained information on what was not currently being worked on, but required completion. Additionally, the working on category contained work both of us actively worked on and allowed us to track, and easily identify the progress and tasks our respective partner had undertaken.
Beyond this, we had two categories of completed work, one relating to PART B of the assessment, and the other belonging to PART A , which allowed further clarification on progress in developing the application. The final category was future, wherein possible adaptations could be implemented, after the 1.0 launch.
Adding in cards under each column allowed us to create tasks to be completed.
On each of those cards, we utilised the colour coded labels to easily identify tasks classed as "easy", "medium" and "hard" and assigned tasks with the use of the member avatars.
The Trello board also allowed us to create check-lists within each card. This allowed us to measure progress, and easily identify what was being worked on and how that work was progressing. It also ensured we didn't miss anything.
Due Date was also a feature we used quite frequently throughout the development stage. This was helpful in ensuring time sensitive tasks were completed as the Due Date allows for reminders to be sent to the assigned team member via email as well as a visual cue on the board.
We also utilized the ability to add attachments to cards. This was helpful in sharing links and images that each other would need.
    
**Discord:**
Outside of Trello, Clare and Chris frequently took advantage of Discord, to discuss work, plan and implement the features of the application in daily stand-ups. Typically we would begin the day by discussing what was being worked on in the morning, and any issues we were having. This process would be repeated throughout various intervals across the day, such as a post-break discussion of what work we would undertake for the rest of the day. Discord provided an invaluable communication tool, that allowed Clare and Chris to collaborate on work and tackle problems together.

**git and GitHub:**
Chris and Clare opted for a Feature Branch Workflow using both git and GitHub.
We each created a new feature branch from the most up to date main branch and named it according to the task to be complete/code to be written.
We both agreed to follow the following process;
- pull latest code from git
- create a separate branch for each task
- create a pull request when done
- the OTHER person merge that pull request (so we were not merging our own work). This was in an effort to keeps us across each others work and aware of any conflicts/double ups etc. 
- create a pull request at the end of each day with final work

**Task Delegation:**
Clare and Chris separated tasks based on skills strength and on a component by component basis.
In doing this, we aimed to avoid conflicts and other related problems. For instance, during the development of the application, Clare undertook development of distinct components of the Booking system, with the associated front-end and back-end features. Whereas Chris implemented these same features for another area of the application, the Profile system. This allowed both developers to work quickly and effectively.
Similarly, at the end of the development life-cycle, facets of the post-development work were divided in this manner. For instance, Clare undertook creating the stakeholder presentation, to demonstrate the Application and updating the Trello for post-launch updates. 

## Testing:
Clare and Chris used a combination of testing methods in the development of their application.
Clare completed the front end testing using Cypress and Clare also learnt Rspec for backend unit and integration tests.
While manual testing was completed by both Chris, Clare and our fictional Flex-Physio client.
Here is a link to our [Manual Testing Sheets](https://docs.google.com/spreadsheets/d/10eFEz3Vz9W_3WQCIav5fjmle-BqDFeKPGa4Tnuqq1is/edit#gid=588398334)

## Diagrams; ERD, Architecture, Dataflow:
To help with the visualisation of our app, we created the following diagrams. 
- An ERD (Entity Relationship Diagram) to speak to the interaction of one table to another
- An Architecture diagram, to give an overall idea of the software system and the relationships between them
- A Dataflow diagram, to graphically represent the flow of data within our app
A link to these diagarams is [here](https://drive.google.com/drive/folders/1X_cNnE89VhbDels3VCezc0bSgx0ay4LO?ths=true)

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

## Third Party Services:
We employed the use of the following third party services;
**Bootstrap,	HTML5, CSS and JavaScript libraries** for consistent styling across the app.
**Devise	Authentication** for the ability to restrict access to logged in users.
**Stripe** A payment software platform implemented in the app to meet one of the business owner's user stories. It is a cashless and secure third party service for online transactions. 
**Prettier** A linting tool for javascript code to help with code alignment and best practise in coding. 
**SendGrid** A third party tool that enables the automatic generation of emails.
