# Developer: Aldwin Arriola

## Table of content
1. [Purpose of the project](#purpose-of-the-project)
2. [User stories](#user-stories)
3. [Features](#features)
4. [Typography and color scheme](#typography-and-color-scheme)
5. [Wireframes](#wireframes)
6. [Technology](#technology)
7. [Testing](#testing)
   - 7.1 Code Validation
   - 7.2 fixed bugs
   - 7.3 supported screens and browsers
8. [Deployment](#deployment)
   - via gitpod
   - via github pages
9. [Credits](#credits)


## Purpose of the project
The purpose of this project is for Project #2(JavaScript), this is part of me achieving the Diploma in Full Stack Software Development at [Code Institute](https://codeinstitute.net/).besides this it is a General Knowledge, Fun Trivia question quiz game project, it can provide more knowledge for the User.

## User stories
 as a User:
   - there should be a button in the main menu that I can click to start the game. 
   - I should also be able to see what the rules of the game are.
   - must have the option to continue or exit the game before starting such game.
   - while I am playing I should see my score.
   - I should have a choice of my answer for the questions.
   - there should also be a timer that I can see on display.
   - I should be able to see the number of questions and how many more questions I have.
   - when I answer the questions wrong I should see the correct answer.
   - and when my answer is correct, my score should increase.
   - when I run out of time and the question is not answered,<br>I should still see the correct answer, but my score will not be increased or decreased.
   - after answering all the questions I should see my total score.
## Features
- ### A Simple, Easy to Remember URL:[History Trivia Quiz](https://araldwin.github.io/Project-2/)
-----
Start Quiz
 - buttons so that the User can start a quiz.

Score and Total of questions
 - where the User can see his Score and the number of questions left.

Feedback to answer
 - where the User can see the correct answer when his answer is wrong.

Interact with an element to move on
 - where the User cannot go to the next question until he answers the question whether it is right or wrong.

Quiz timer 
 - Add the quiz timer to limit the time your respondents will have to complete each question. This way you can ensure that the user will not have enough time to search the answers on the web. You'll find this feature in the Extra Options tab at the Quiz options section.

Timer Off
 - Display correct answer.
 - User will not gain correct score.

View correct answer
 - When user selected wrong answer, it will automatically display correct answer.
   - correct answer with a tick
   - wrong answer with a xmark

Result at end of quiz
 - Users score will be shown in the end of the quiz, failing score will note "Try Again" Passing score will note "Nice" and Perfect and greater than passing score will note "Congrats!".
-----
- ### This website is mobile friendly or responsive design that fits standard screen sizes.
 ![HTQ-iamresponsive](/docs/HTQ-iamresponsive.png)

 - ### Future features
      - A background music.
      - More history trivia questions.
 -----     
## Typography and color scheme
### Typography
- I used Roboto fonts in this project with fall back being Sans-serif. This Font is simple and adapted to the website and it is linked to the CSS document via @import.
![HTQ-typhography](/docs/HTQ-typhography.png)
### Color Scheme
- In this website I used black #000000 for the Fonts and white #FFFFFF for the text shadow. I also used different colors for the style of the buttons and other backgrounds. like Chocolate tradition #783205 as the main color of the buttons to get its golden style. next are the other colors I used.Alice Blue#F0F8FF,Dark Cornflower #004085, Beau Blue #CCE5FF, Forest Green Web #23903C, Crimson UA #A42834, Lincoln Green #155724, and Persian Plum #721C24. other colors not mentioned are border color and box shadow. i used these colors to match the theme of the website. 
![HTQ-colorscheme](/docs/HTQ-colorscheme.png)
-----
## Wireframes
- [Balsamiq](https://balsamiq.com) - i used balsamiq to create [wireframes](https://balsamiq.cloud/shny6lm/pz4i6g4/rE2F0) for my project.
-----
## Technology
### Languages used
- HTML5
- CSS3
- JavaScript
### Others
- [Am I Responsive](https://ui.dev/amiresponsive) - - online tool used to create mockup to present responsive design of this project.
- [Coolors.co](https://coolors.co) - used to create color palette.
- [Fontawesome](https://fontawesome.com/icons/) - where i import font icons for this project.
- [Google Fonts](https://fonts.google.com) - where i import and use font-style for this project.
- [Git](http://gitscm.com) - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [Gitpod](https://gitpod.io) - IDE used to code the project.
- [GitHub](https://github.com) - GitHub is used to store the project's code after being pushed from Git.
- [Visual Studio Code for Windows]() - IDE used to code the project.
- [Unsplash](https://www.unsplash.com/) - for the webpage main background image.
- [Windows Snipping Tool] - used to save the screen shot.
-----
## Testing
### 7.1 Code Validation
- [JS Hint](https://jshint.com/) - used to check JavaScript codes.
![HTQ-Jshint](/docs/HTQ-Jshint.png)
-----

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) - used to validate the project css.
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>
<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>

![HTQ-W3CCSSValidator](/docs/HTQ-W3CCSSValidator.png)
-----
- [Nu Html Checker](https://validator.w3.org/nu/#textarea) - used to check the project html.
#### Index.html
![HTQ-HTMLchecker](/docs/HTQ-HTMLchecker.png)
### 7.2 fixed bugs
![HTQ-fixedbug](/docs/HTQ-fixedbug.png)
- i had a problem with the title box where even if i click start qiuz it doesn't disappear, which it should disappear.
- to solve this problem i simply change the:
    - titleBox_rmv.classList.remove("title_box"); into titleBox_rmv.style.display = "none";
    - titleBox_rmv.classList.add("title_box"); into titleBox_rmv.style.display = "block";
-----
### Lighthouse report
![HTQ-lighthouse](/docs/HTQ-lighthouse.png)

### 7.3 supported screens and browsers
- Supported browsers
   - Google Chrome
   - Microsoft Edge
   - Safari

- Supported screens
   - Such a viewport was obtained from the am i responsive website where it was used to have an appropriate size for responsive design.

## Deployment
- via gitpod
   - go to and log in to [github](https://github.com/).
   - after login. on the top right side of the page next to the bell icon click on the "+" and select "New repository".
   - now i can create a new repository. put repository template, repository name, its description and other options, after that just go to the bottom and press "Create repository" and then it take me to gitpod.

- via github
   - go to and log in to [github](https://github.com/).
   - go to repository and choose [Project-2](https://github.com/araldwin/Project-2).
   - after that head to [setting](https://github.com/araldwin/Project-2/settings).
   - find and click "Pages" in the Code and Automation column.
   - select "deploy from a branch" in Source, select "main" and "root" in Branch and save.
![githubdeployment](/docs/githubdeployment.png)
   - click the given weblink [araldwin.github.io/project-2/](https://araldwin.github.io/Project-2/).

## Credits
   - https://www.codingnepalweb.com/quiz-app-with-timer-javascript/ - Tutorials i used.
   - [W3C School](https://www.w3schools.com/) - for more knowledge that I learned.
   - Code institute README.md Template
   - Google images for the background
## Acknowledgements
   - Mr. Rohit to my mentor
   - Student Support
   - Slack community
   - Code institute

## Disclaimer
   - History Trivia quiz was created for educational purpose only.