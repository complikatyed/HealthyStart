# HealthyStart

### Description:
In the spring of 2015 Alignment Nashville (a non-profit group that works to support Metro Nashville Public Schools) approached Code for Nashville about having some of their printed resource guides converted into on-line apps.  While CfN did not have enough official bandwidth to take on this project, I volunteered to do a dry-run using material from AN's _Healthy Start, Healthy Future_ resource guide for teen mothers.

*I'm grateful to Alignment Nashville for allowing me to use their data for this project.*

---

The app is fully responsive (so teens can access the resource information more privately via their phones) and includes three main sections:  stages of pregnancy, community resources, and useful terms.  The screenshot below shows the mobile version of the home page:

![Screenshot 1: No selection](https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HSHomePagePhoneSize.png)

Dropdown menus allow the user to choose a stage or resource to explore: 

![Screenshot 2: No selection](https://github.com/complikatyed/HealthyStart/blob/master/assets/images/HealthyStartPregnancyStages.png?raw=true)

![Screenshot 3: No selection](https://raw.github.com/complikatyed/HealthyStart/master/assets/images/HealthyStartResourcesList.png)

The third menu on the homepage provides a list of terms -- the vocabulary of pregnancy and birth -- to assist teens in navigating the resources.

---
Each of the five Stages of Pregnancy pages includes an internal menu:

![Screenshot 4: No selection](https://github.com/complikatyed/HealthyStart/blob/master/assets/images/HealthyStart_Stage1Options.png?raw=true)

Dropdown views provide information and links specially tailored to that stage of pregnancy:

![Screenshot 5: No selection](https://github.com/complikatyed/HealthyStart/blob/master/assets/images/HealthyStart_AppOptions3.png?raw=true)

---
The nine community resource pages are organized by topic and use AngularJS to display JSON data stored in Firebase.  The screenshot below is one of my favorite pages:

![Screenshot 6: No selection](https://github.com/complikatyed/HealthyStart/blob/master/assets/images/HS_StayInSchool.png?raw=true)

The deployed app can be viewed here:  [https://healthystart.firebaseapp.com](https://healthystart.firebaseapp.com)

---

### Technologies:

- HTML
- CSS/Sass
- Gulp
- AngularJS
- Firebase
- Bootstrap
- Node & Bower


### How to run:
```
-Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
-Navigate to the project folder in terminal and type: `http-server -p 8080`  
-This will show at: `http://localhost:8080` in your internet browser.  
```

