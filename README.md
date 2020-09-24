# WaterHarvesingQuestionnaire
## "Rainwater Harvesting Questionnaire" is an attempt to develop GUI using HTML-CSS-Javascript tools to collect user data for water harvesting and management purposes.
<img src='https://github.com/gk100/GUI4WaterManagement1/blob/master/GUI_screenshot.PNG'>

### Live project can be seen through this Link: https://codepen.io/gk100/project/full/Xqmpnz

This is a form that includes a short questionnaire for customers who wish to install rainwater/ roofwater harvesting system in their house or at their property. The form will first collect the essential personal details of the customer and will then ask details required for installing appropriate water harvesting system at their facility. The purpose of the form is to collect preliminary information of the customer intended to install right water harvesting system at their household. Although, this is not the exact or complete structure of the form but could get a general idea of how the survey form should be to collect data for such activities and of course, to complete the given task of the project.
The reason to choose this type of form is that, being a consultant in the water sector, I always wanted to take leverage of technology to solve daily water problems. Thus, apart from working on technical activities in the field, I am keen to develop tools that collects and disseminates useful information to end user. In my opinion, this is a step in that direction!
Files used to work the project are as follows:
1)	Rain_Water_Harvesting_Questionnaire.html
2)	kssg_basicstyles.css
3)	kssg_basicscript.js
Images with link used in project are as follows:
1)	RwHimage1.jpg (http://www.delhijalboard.nic.in/sites/default/files/RWH3.jpg)
2)	RwHimage2.jpg
(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbj_GpCXGQUkNG-mvLD_SolroSauXDFfroOfOuPMcC4P6WqH6MA&s)

Documentation for Reviewer
The final project to create a form “Rainwater harvesting questionnaire” includes files as follows:
1)	Rain_Water_Harvesting_Questionnaire.html
– includes the complete structure of the form.
2)	kssg_basicstyles.css
– includes code to style HTML form elements.
3)	kssg_basicscript.js
– include scripts for validating important entries and final submission verifications of the form.

The form includes about 21 number of inputs in total.
6 types of inputs as follows:
text, number, date, radio, checkbox, image.

Following is the list of validation functions with their purpose included in the JavaScript file:
1)	Function checkName () – to validate whether user have entered any input or not and disables all other inputs until valid input is provided.
2)	Function checklastname () – validate and reply to user whether the input is filled or empty. It doesen’t make any change to input from enabling or disabling it.
3)	Function checkphno () – The function not only checks whether user provide input or not but also checks if entered number is long enough to be valid or not.
4)	Function checkdate () – function to check whether user have entered the date of birth or not.
5)	Function checkemail() – function to check whether user have entered any input or not. It also validate the correctness of input provided by the user through regular expression logic. [reference: W3school / W3resources]
6)	Function checkaddress() – the function to check whether user have entered address or not.
7)	Function myPrompt() – the function occurred as ‘onclick’ event, that prompts an alert window and ask user to enter the phone number that previously entered in the form in order to verify and submit the form. The function keeps on prompting message to enter correct phone number through ‘while loop’ nested inside ‘if…else loop’.
8)	Function pageScroll () – the function is used to scroll page to the bottom after successful submission of the form with success message (function could be useful if the form further improved to display the information provided by the user as preview).
9)	Function successmsg () – the function prints the success message. (Function could be further improved to display the information provided by the user as preview)

Following is the list of classes and Ids created in CSS document to manage the overall appearance of the webpage:
1)	Class label {}
2)	Class buttons {}
3)	Class fit-picture {}
4)	Class set-banner {}
5)	Id #submit {}
6)	Button {}
7)	Th {}
8)	Input {}
9)	Input [type number] {}


