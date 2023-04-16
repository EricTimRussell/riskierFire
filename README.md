# RiskierFire ![riskierLogo](https://user-images.githubusercontent.com/99972346/232327914-3ab6c685-4aef-41fe-91e5-85ab7391ecff.jpg)

This application is used in conjuction with a board game I am developing and is primarily meant to be used on mobile devices. The board game has alot of vairiables and the app simplifies all of that for a better user experience.

Here is a link to the active website( https://riskierfire.netlify.app/ ). Feel free to play around with the app. NOTE: This is the minimum viable product and not a final product.

## Game Summary

RiskierFire is the second iteration application I have created for my board game. Riskier is the code name for my board game in honor of one of my favorite board games Risk. Riskier is a more complex military strategy game as compared to Risk or Axis and Allies. This complexity required the need for an application to assist players keep track of their teams assets and speed up the turn time per player.

## RiskierFire App Summary

What does the app itself actually do for players? RiskierFire helps players keep track of all their teams assets. Every team has assets and resources much like you would see in a real time strategy video game. The app keeps track of a players resources in-real-time as they purchase items and claim new resources on the physical board game. RiskierFire also allows players to add and remove assets for their team. The details of all these assets are tracked by the app when the player creates them. In short, RiskierFire app is an orginization tool that lets players focus on their strategy rather than micro-managing their teams resources and assets.

## RiskierFire In-Detail

### Technology
The app largely utilizes Vue.js, Bootstrap, and Firebase. Along with some utilization from Sass and SweetAlert2 for some quality of life CSS features they offer. I went with Vue.js simply because it is the front-end framwork I know best. I used Bootstrap because my app is meant to be used with mobile devices. Bootstrap makes it very easy to build applications for every screen size. Lastly, I used Firebase for their database and auth services without having to write my own back-end. My first iteration of the riskier app used C#, dotNET, and mySQL for my API and database. However, I found that I needed something much more flexable that could keep up with the ever changing rules of my physical board game. Firebase allows me to change the dynamic features of my game much more easily without having to change any back-end code.

### Using the App
Using the app does require some knowledge about the basics of the board game. I will provide a brief description of the basics. All teams have resources and assets. Capital, industry, agriculture, and production are the four resources. A teams resources are increased by capturing regions. Assets include units, buildings, and navy. These cost resources in order to build. Lastly, their are goups of units called armies, divisions, and carriers. These groups are simply just a way of tracking large numbers of units and reduce the number of pieces on the physical board game.

Now with that brief description I can describe how to use the app. When a user first visits the riskierfire website they will need to create an account and then a team. The home page will provide brief instructions on how to do that. Once those are created the navbar should be populated with eight icons and a logo. The logo and four icons on top of the navbar. And four icons on the bottom of the navbar. The logo and top four icons are used to navigate the website. The book is a complete list of rules. The game controller is the game page where users will track units, groups, and regions. The hammer and wrench icon is the construction page where players can build and manage their buildings and naval units. Lastly, the swords icon is the combat page where users can see combat odds of each unit as well as roll virtual dice to determine the success or failure of an action. The four icons on the bottom represent the players teams total resources. The $ sign is capital, the factory is industry, the leaf is agriculture, and the wrench is production. 

Players can navigate to the rules page by clicking the book icon to learn how to get started setting up their game in the app. Once players have finished the get started section regular turn play can begin. This is not intended to be an exhaustive list on how to play the game. Just how to begin using the app.

