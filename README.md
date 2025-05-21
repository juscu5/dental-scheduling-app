
# DENTAL SCHEDULING APP
This is a Dental Office Online Scheduling System that built with React/Node.js

## Goal and Objective
- The goal of this web application is allowing the patients to schedule and manage their appointments online.
- Check the available dentist with their services and available schedule.
- For better user interactions and comunications through website information like About Us Contact us and Portals.
- The user can have an appointment schedule through online withouth hassle going outside.

## Requirements and Scope
- There are Home Page that displays the dental office’s information, services, and a call to action to schedule an appointment. 
- There are Booking Page that allows a user to select a dentist, view available slots, and schedule an appointment.
- And User Dashboard, After logging in, a user can view their upcoming appointments, reschedule or cancel them.

## Currently on build website (Update)
- The running website is now deployed online under AWS and can now access online which is present on the Requirements
- You can book an appointment, edit the appointment and delete the booked that you've done under on Portal where you can login and register.
- You can see on the Dashboard you current appointment through calendar and tables.


## UPDATES
- Since the website app is made within 5 days, there are more room improvement and development that need to apply on the application. 
- Some other PLUS didn't make it because of limited timeframe, but still manage to align on the given requirement. 

###


# INITIALIZATION - DEPLOYMENT
The application initialize using Vite and Node Cli with the use of VS Code 



## TECH STACK

**Frontend:** React, React-Dom, Zustand, React-Query, MUI Base Design, Emotion, Iconify, Moment, Notistack, Material-React-Table, FullBigCallendar-React

**Backend:** Node, Express, Sequelize, MySQL2 Cors, JWT-Token, Crypto, Moment, Cross-Env

**Database:** MySQL Apache, AWS Aurora RDS, Relational Database

**Deployment:** Docker, Kubernetes, AWS ECR, AWS EKS.

**Future Development Plan:** Use of SSE of Notification and Websocket for messaging and other use of that. 






## INSTALLATION

Install of Client and API using NPM 

```bash
  npm install dental_app/Api
  cd dental_app/api
```
```bash
  npm install dental_app/Client
  cd dental_app/Client
```
## APPLICATION RUN
Both frontend and backend
```bash
  npm run dev
```

## APPLICATION BUILD
Both frontend and backend
```bash
  npm run build --production
```

## DOCKER BUILD AND PUSH
```bash
  docker build -t dentalschedulingbackend:latest .
  docker tag   /* AWS REPOSITORY */
  docker push   /* AWS REPOSITORY */
```
```bash
  docker build -t dentalschedulingfrontend:latest .
```

## REPOSITORY
- master
- development
- dev-(feature)

## FRONTEND CURRENT ROUTES
```bash
  ...amazonaws.com/#/home
  ...amazonaws.com/#/services
  ...amazonaws.com/#/about-us
  ...amazonaws.com/#/contact-us
  ...amazonaws.com/#/book-an-appointment
  ...amazonaws.com/#/jdcdc-portal/login
  ...amazonaws.com/#/dcdc-portal/appointment
```

## BACKEND CURRENT ENDPOINTS
```bash
  /* for GET, POST, PUT, DELETE */
  booking/ 
  user/
  contact/
  dentist/
```



## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Roadmap

- Additional browser support
- Add more integrations
- Add more features that stactic for now
- Improve UI and Functionalities
- Add more updgrade came from actual clients


## Demo

Insert gif or link to demo


## Screenshots
### ENTITY RELATIONSHIP DIAGRAM (ERD)
https://drawsql.app/teams/jscu/diagrams/dental-scheduling-app

![App Screenshot](/ERD.png)

### ACTUAL WEBPAGE
![App Screenshot](/Homepage.png)


## Acknowledgements

 - Assignment/Task given by Ma'am Collene Brillantes

