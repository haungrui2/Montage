"Montage" is a movie-sharing platform established to provide information about movies and help people find their interested movies.
Users could search, view, like, rate, comment on, and receive recommendations about movies.

# Montage
CPSC 455<br />
Team Members:<br />
Andy Huang, q9h2b<br />
Aure Ma, q1c3b<br />
Ziyue Hu, x5g3b<br />
Hongtao Zhu, e0g3b<br />

**GitHub Repository**:<br />
https://github.com/MonsieurRadiant/Montage/tree/main<br />

**Projection Description**:<br />
&nbsp; &nbsp; &nbsp; &nbsp;The project “Montage” is a website made for general movie audiences. It is a website that stores titles, posters, descriptions, ratings, other information such as genres of different movies and preferences of different users. In this website, users could rate, review, and search movies based on categories. The website also provides functionalities such as notification of upcoming movies. Information about movies would be uploaded(added) and edited by the manager of the website. Users would then be able to interact with this data by providing their rating and reviews of different movies.<br />
&nbsp; &nbsp; &nbsp; &nbsp;If time is enough, additional functionalities such as unique recommendation of movies based upon user preferences would be added.<br />
<br />
**Project Task Requirements**:<br />
&nbsp; &nbsp; &nbsp; &nbsp;Minimal Requirements:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can view the titles, posters, and descriptions of different movies.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can post reviews to a movie.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can rate a movie.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can search movies based on a movie title.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;Standard Requirement:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can sign up and log in with username and password.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can set up their personal preferences.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can search movies based on the general information of the movie, such as categories and rating.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-The manager of the website can upload new movies.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-The manager of the website can edit information of movies.:white_check_mark:<br />
&nbsp; &nbsp; &nbsp; &nbsp;Stretch Requirement:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can get notification of the upcoming movies they selected.:x:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can get recommendation of movies based upon their personal preferences stored in the website.:white_check_mark:<br />
<br />
&nbsp; &nbsp; &nbsp; &nbsp;Division of minimal requirements:<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can view the titles, posters, and descriptions of different movies.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;1. Titles, posters and descriptions are stored and can be read from database.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;2. User interface is built to display this information.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;3. Data can be loaded onto the website from database.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;-Users can post reviews to a movie.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;1. The database of reviews for different movies is established.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;2. Users can write reviews with a user interface.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;3. The reviews can be sent to the server and stored in database.<br />
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;4. Reviews in the database can be fetched onto the website.<br />

**Technologies from unit 1-5**:<br />
Unit 1 – HTML, CSS, JS:<br />
Both the client and server ends are mainly written with JavaScript and all components are written in JSX which is basically HTML in react app. Using JSX rather than HTML helps separate our functionalities into different components in separated files and since JSX will convert everything into a string before rendering, this prevents injection attacks such as XXS attacks. All of our components are then arranged and decorated with separated CSS files.<br />
<br />
Unit 2 – React & Redux:<br />
Our client end app is a react app made up of functional components written in JSX. We use hooks and states to control our components and functionalities. Upon this, almost all of our states are managed in redux reducer stores and are modified by calling actions. By doing so, we make sure that all our data are immutable and achieved unidirectional data flows.<br />
<br />
Unit 3 – Node & Express:<br />
Our server end is built with Express and all requests are achieved and managed with NodeJS. We use REST-based HTTP methods (such as GET, PUT, POST, DELETE, and PATCH) to send requests and asynchronously achieve operations in the server (most operations are manipulation of data in the database).<br />
<br />
Unit 4 – NoSQL with MongoDB:<br />
All our data, such as the information of movies, and information of users are stored in accordance with its specific model in MongoDB. We fetch and manipulate these data in our server with asynchronous NoSQL queries. By doing so, we provide high data availability and fault tolerance and greater flexibility of our data.<br />
<br />
Unit 5 – Release Engineering:<br />
The structure of our repository is monorepo which makes two ends (client and server) easier to interact with each other and avoid diamond dependencies. In the branch we deploy our app, we use GitHub actions to automatically test whether our app can be built before deployment (Continuous Integration) and automatically deploy it to Heroku if it is deployable (Continuous Deployment). By doing so, we make sure that we have a branch of a stable and deployable version of our app and all changes to it can be automatically presented to the user.<br />
<br />
**Above and Beyond**:<br />
We believe our search and recommendation functionality goes beyond the requirement of this course. Our search functionality uses regex (regular expression) to provide complex search functionalities that allow users to search based on a movie's title, rate, genre and year. Our recommendation functionality could recommend users movies they more likely would be interested in through an algorithm based on the genres of users' favourite movies. Moreover, our recommendation functionality would not recommend movies that have been recommended in the past 7 days or are in users' favourite movie list.<br />
<br />
**Further Improvement**:<br />
The further improvement of this application aims to finish the incomplete stretch requirement to allow users to get notifications of the upcoming movies they selected. We also plan to further improve the user interface so it is more user-friendly and add more functionalities such as allowing users to provide descriptions for different movies to encourage more user-generated content on the website. We should also store movie posters in a stable public server as HTTP url so that the images load faster than storing in a databse as base64.<br />
<br />
**Contributions:**<br />
Andy Huang: Andy achieved Login and Signup functionalities for both the front and back end. He also engaged in constructing the navbar component and hamburger menu, and contributed a lot to the decoration of the user interface.<br />
Aure Ma: Aure helped take the user information from the back end and store it in the front end reducer. She also helped in constructing the user profile page.<br />
Edward Hu: Edward achieved comment and rate functionalities for both the front and back end and constructed the persist store for user information. He constructed the search functionality in the back end and helped improve the recommendation algorithm. He also provided a lot of help in the construction of many components such as uploading and debugging a lot of them.<br />
Ronnie Zhu: Ronnie achieved view, recommend, upload, edit movies, and set up user personal preferences for both the front and back end. He also constructed the front end of search functionality and navbar, and engaged in a lot of user interface construction and debugging. He is the main uploader of the different movies on the website.<br />
<br />
**Sketched Prototypes**:<br />
User Login:<br />
![image](https://user-images.githubusercontent.com/69447562/170618948-47426200-68e0-4971-a547-0d779977d4ac.png)
Recommendation:<br />
![image](https://user-images.githubusercontent.com/69447562/170619042-d6c630d5-361b-42a4-ae08-d6c7e9fb1601.png)
Movie Information, rating, and review:<br />
![image](https://user-images.githubusercontent.com/69447562/170621654-2fb1dc5a-f133-4c5f-a5cc-746c8f945f20.png)



