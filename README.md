# Team19 (Braven_Maverick) - Braven career connect

Braven strives to reduce the education-to-employment gap among the students by providing mentoring, mock interviews etc for the students. The challenge faced by Braven is to schedule the mock interviews of a candidate with an interviewer with matching skill set. Another important problem they want to address is scalability. 

We have designed an application with scalable  architecture which can intelligently recommend an interviewer to match with the candidate.

## Components
* Front End 
  * iOS App for the student
  * ReactJS UI for interviewer-volunteer

* Backend 
  * Machine Learning algorithm to find the match
  * Flask Server to feed each student detail to the recommender model and then retrive the matching interviewers
  * NodeJS APIs to retrieve data from database
  
* Data
  * CSV files exported from database for the machine learning model
  * Database

## Set Up Instructions
### iOS App
1. Download Xcode
1. Download the github repository
1. Navigate to the BravenInterviewApp directory in your file manager
1. Open BravenInterviewApp.xcworkspace with Xcode
1. Connect an external device or use a iOS simulator
1. Press the Play button in Xcode or Product/Run to run the code
 
### Front End
1. Download the github repository
1. ```cd frontend/braven-hacks/```
1. Run  ```npm install```
1. Start the application using ```npm start```
   
### Backend
#### NodeJS Server
1. Download the github repository
1. ```cd backend/```
1. Install the dependencies from package.json  ```npm install```
1. Start the server -  ```node index.js```
#### Flask Server
1. Download the github repository
1. Run ```python app.py```
 
 ## High Level Architecture
 ![High level Architecture](https://www.lucidchart.com/publicSegments/view/20e39e90-548a-41a8-a820-71a026117ead/image.png)
 
 Devpost - https://devpost.com/software/braven_maverick
