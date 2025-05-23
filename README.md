

# \:sparkles: Salong Owner Recommendation Site \:sparkles:

View the live project here: [https://webbcouture.github.io/p-2.1/](https://webbcouture.github.io/p-2.1/)

![sceens](readme-images/screens.png)
---

## \:clipboard: Project Outline

This project is a use-case example of a webpage that can help salon owners find tips on the market's best and most affordable wholesalers.

The webbpage project outline is as follows:
**Informed and recommended where to go for best Wholesalers:** Helps salon owners find good, affordable wholesalers quickly. It also provides detailed information about wholesalers and their specialties.
**Interactive and User-Centric Design:** Creating a user-friendly experience for e-commerce stores/websites to improve recommendations and categorization.
**Seamless Product Categorization:** Streamlining categorization to help customers find specific tips for particular purposes, catering to the needs of the best and most affordable wholesalers.

---

## 📑 Table of Contents

- [📋 Project Outline](#clipboard-project-outline)
- [🔍 Project Description](#mag_right-project-description)
- [🎯 Project Goals](#dart-project-goals)
- [✅ Purpose](#white_check_mark-purpose)
- [🎯 Target Audience](#🎯-target-symbol-target-audience)
- [📝 User Experience](#memo-user-experience)
  - [1️⃣ First-Time Visitor Goals](#one-first-time-visitor-goals)
  - [🔁 Returning Visitor Goals](#repeat-returning-visitor-goals)
  - [3️⃣ Frequent User Goals](#three-frequent-user-goals)
- [⚙️ Features](#gear-features)
- [🎨 Design Section](#art-design-section)
- [📐 Wireframes](#triangular_ruler-wireframes)
- [🛠 Technologies Used](#wrench-technologies-used)
- [🐞 Known Bugs](#bug-known-bugs)
- [💻 Browser Compatibility Testing](#computer-browser-compatibility-testing)
- [☑️ HTML Validator Results](#ballot_box_with_check-html-validator-results)
- [☑️ CSS Validator Results](#ballot_box_with_check-css-validator-results)
- [☑️ JavaScript Validator Results](#ballot_box_with_check-javascript-validator-results)
- [📥 Deployment](#inbox_tray-deployment)
- [✅ Testing](#white_check_mark-testing)
- [📊 Lighthouse Scores](#lighthouse-scores)
- [👏 Credits](#clap-credits)
- [📷 Media](#camera-media)
- [🙏 Acknowledgments](#acknowledgments)

---

### \:mag\_right: Project Description:

A webpage that categorizes recommendations of wholesalers for salon owners in one place. You choose the desired category you would like to get tips about and get associated with wholesalers that would have the best-desired products and/or services. Beyond the homepage, the site includes a quiz designed to educate users about various salon services, treatments, and related products, which is updated regularly with new content. The webpage also has a contact form. Features that could be implemented in the future include updating wholesalers, categories, services, and new quiz questions.

### \:dart: Project Goals:

The overall goal of the project is to create a website that increases the knowledge of where salon owners can find and buy everything they need for their salon. Since there are so many wholesalers, this webpage makes it easier and quicker for salon owners to find good, trustworthy, and affordable wholesalers.

### \:white\_check\_mark: Purpose:

To inform users of the best and most affordable wholesalers in one place, categorize those recommendations, and have a seamless user experience. A webpage that could have multiple products/recommendations that can be included in different categories, making it easier for consumers to find exactly what they are looking for and get easy and fast access to the right wholesaler. Since there are so many wholesalers, this webpage makes it easier for salon owners to find good, trustworthy, and affordable wholesalers quickly.

## 🎯 Target Symbol: Target Audience:

This page is particularly for salon owners who usually try to find the best wholesalers easily and quickly. For example, this can be used for a wide range of businesses. In this case, I chose a wholesaler's recommendation for salon owners categorized by their specialties in different things that you need when you have a salon. 

---

## \:memo: User Experience

### \:one: First-Time Visitor Goals

* Understand the main purpose of the site quickly.
* Navigate the site easily to find information.
* Locate the info and contact pages effortlessly.
* Learn what the company offers and how to get in touch.

### \:repeat: Returning Visitor Goals

* Quickly access the contact form.
* Try the quiz to learn more about salon-related topics.
* Get in touch to give feedback or ask questions.

### \:three: Frequent User Goals

* As a Frequent User, want to find the company's contact quickly and easily.

---

## \:gear: Features

* **Navigation menu with easy access to the following sections:**

Home: The landing page of the site.

Quiz: Access to the interactive quiz.

Contact: A page for contacting the site administrators.

* **Category choice** This feature allows you to select a category, such as 'Hair Products', and receive recommendations and tips about specific wholesalers offering a variety of products and customer services related to that category.

* **Updated recommended wholesaler cards**: Recommended wholesaler cards appear only if they are in the index of the associated category part.
* **Highlighting category chosen**:
 The first solution I chose to make this feature was simply highlighting the box by changing the box colors on the active class when clicked and keeping the structure of the box selection unchanged.

Then I decided to add to the feature and make a transition effect to make the box larger when clicked. The box once clicked changes to the active CSS class, which has a different flex property than the box class before it is clicked; therefore, it has a transition with an ease-in effect.

```css
.box {
  flex: 0.5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 0;
  gap: 0px;
  overflow: hidden;
  background-color: #ffffff;
  width: 200px;
  margin: 0 auto;
}

.box img {
  object-fit: contain;
  max-height: 100px;
  max-width: 100px;
  display: none;
}

.box h3 {
  padding: 5px;
  font-size: 1rem;
}

.box.active {
  width: 280px;
  border: 3px solid #641160;
  background-color: #e674cd;
  z-index: 1;
  opacity: 1;
  transform: scale(1.1);
  transition: all 0.5s ease;
}

.box.active img {
  display: block;
}

.box:not(.active) img {
  display: none;
}

.beautys .box:not(.active) {
  flex: 0.3;
  opacity: 0.5;
  transform: scale(0.8);
  min-width: 0;
  width: 200px;
}

```

* **Responsive design** to allow for a preferred user experience. Category and recommended wholesaler card containers are made smaller or larger depending on screen size.


![homepage](readme-images/home.page.png)

* **Quiz Page**
Describe how users can test their knowledge or preferences and how the quiz works.

![quizpage](readme-images/quizimg.png)

* **Contact Page:**
Mention form elements (name, message, etc.), validation, and submission behavior.

![contactpage](readme-images/contactimg.png)

---

## \:art: Design Section

* **Color Scheme:** The categories and boxes are styled visually with a consistent color palette that complements the website's theme. Different category boxes are emphasized with contrast with a larger box effect when clicked.

* **Typography Choices:** The font is chosen for clarity and ease of reading. Headings are bold, and body text is kept simple and legible to create an inviting user experience.

* **Layout Rationale:** The layout is designed to be clean and easy to navigate, with an interactive design that makes it simple for users to select categories and view recommendations quickly.

---

## \:triangular\_ruler: Wireframes

The web page includes Balsamiq wireframe images. 

Home - Page one:
This shows the homepage as it appears when you first open the site, and how it looks when you click on a category.

![page1](readme-images/page1.png)

Quiz - page 2:
The quiz page allows users to interact with questions and learn more in a fun way.

![page2](readme-images/page2.png)

Contact - page 3:
The contact page provides a form for users to send inquiries.

![page3](readme-images/page3.png)

---

## \:wrench: Technologies Used

* **HTML, CSS, JS**: These are the core technologies used to build the website.
* **Favicon**: Icons used for a cleaner and more interactive design.
* **GitHub, Git**: Version control used for the project’s development.
* **Github pages**: Used to host my webpage.
* **Balsamiq**: Wireframing tool used to plan the project’s structure.
* **Grammarly**: Used to check the spelling

---


## \:bug: Known Bugs

* I had a problem where, when my cards pop-up, they were triggered by the space between the card and the box, which caused the functions to lag. I solved it by changing from flex to actual sizes until the problem disappeared.

* When viewing on a small screen, the cards and boxes were stacked on top of each other due to the limited space. I adjusted the layout to give them separate space, but when I did, the cards and boxes ended up beneath each other on smaller screens, so I had to find a solution. I then adjusted the sizes for smaller screens so everything would shrink and look as good as it does on the webpage. Now, the boxes and cards are positioned side by side with proper indentation, which looks great.

---

## \:computer: Browser Compatibility Testing

* **Chrome, Firefox, Safari, Edge**: Tested on these browsers to ensure consistent experience. No issues were found.

---

## \:ballot\_box\_with\_check: HTML Validator Results

index.html: Valid
![htmlvalidator1](readme-images/html-validator.png)

quiz.html: Valid
![htmlvalidator2](readme-images/html-validator-quiz.png)

contact.html: Valid
![htmlvalidator3](readme-images/html-validator-contact.png)

## \:ballot\_box\_with\_check: CSS Validator Results

![css-validator](readme-images/css-validator.png)

## \:ballot\_box\_with\_check: JavaScript Validator Results

JS testing for the home, quiz and contact functionalities were validated with no errors.

Script.js:
![scripttest](readme-images/script-js-validator.png)

Beauty.js:
![beautytest](readme-images/beauty-js-validator.png)

Quiz.js:
![quiztest](readme-images/quiz-js-validator.png)

Contact.js:
![contacttest](readme-images/contact-js-validator.png)



---

## \:inbox\_tray: Deployment

## How to clone the repository
Go to the https://github.com/WebbCouture/p-2.1 repository on GitHub
Click the "Code" button to the right of the screen.
Click HTTPs and copy the link there.
Open a GitBash terminal and navigate to the directory where you want to locate the clone.
On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process. Any changes pushed to the main branch automatically
show up on the site.

## How to Forking the GitHub Repository
By forking the GitHub repository, you can make a copy of the original repository in your own GitHub account. This means you can view or make changes without making the changes affect the original. Log into GitHub and locate the GitHub repository. At the top of the repository, there is a "Fork" button above the "Settings" button on the menu. You should now have a new copy of the original repository in your own GitHub account. Any changes pushed to the main branch automatically show up on the site.

---

## \:white\_check\_mark: Testing

* Tested the page on different browsers (Chrome, Firefox, Safari, Edge).
* Confirmed that category cards and recommended wholesaler selection panel texts are all readable and easy to understand.
* Tested that the form is clickable and actionable across multiple screen sizes.

## Testing Table for Salong owner recommendation site

| **Feature** | **Test Description** | **Pass/Fail** |
|----------------------------|---------------------------------------------------------------------------------------------------------------|---------------|
| **Loading the homepage** | Verify that the home loads correctly when the page is opened. | x |
| **Category Selection** | Verify that clicking a box highlights it and scales the box while deselecting others.             | x             |
|                            | Ensure that the `active` class is correctly applied to the clicked box.                                      | x             |
|                            | Confirm non-selected boxes shrink and remain visible.                                                        | x             |
| **Beauty Data Display** | Check that relevant cards are displayed when a box is selected.                               | x             |
|                            | Validate that the content container is cleared before new cards are added.                              | x             |
|                            | Ensure that the card title, image, and link are correctly populated.                                         | x             |
| **Card Interaction** | Verify that hovering over cards applies a lift effect (transform).                                      | x             |
|                            | Ensure card layout remains consistent across screen sizes.                                              | x             |
| **Data Import Functionality** | Confirm that beauty data is correctly imported from `beauty.js`.                                               | x             |
|                            | Ensure the app functions without errors when the `beauty.js` file is updated.                                  | x             |
| **Event Listener Handling**| Test that event listeners for box clicks are correctly registered and trigger appropriate functions.        | x             |
|                            | Validate that `getBeautyByCategory()` is called with the correct category.                                    | x             |
|                            | Confirm that `displayBeauty()` updates the UI without errors.                                                 | x             |
| **Responsive Design** | Check layout on different screen sizes, ensuring no overlapping elements.                                    | x             |
|                            | Confirm beauty parts are contained within the viewport at all sizes.                                           | x             |
|                            | Ensure scaling transitions work smoothly on mobile and desktop.                                              | x             |
| **Performance Optimization** | Verify that UI updates (e.g., beauty display) are handled efficiently.                                         | x             |
| **Error Handling** | Test with missing or malformed beauty data to ensure the app handles errors gracefully.                        | x             |
|                            | Confirm the app displays an empty state without errors when no beauty data exists.                             | x             |
| **Loading the quiz** | Verify that the quiz loads correctly when the page is opened. | x |
| **Correct question number display** | Ensure that the current question number is displayed accurately (e.g., "Question 2 of 5"). | x |
| **Correct feedback with color on answer** | Check that correct answers show green feedback and incorrect answers show red feedback. | x |
| **Go to next question after answering** | Confirm that clicking an answer automatically takes the user to the next question. | x |
| **Final page shows number of correct answers** | Ensure that the final page displays the total number of correctly answered questions. | x |
| **Reset button to start quiz again** | Test that the reset button restarts the quiz from the beginning, clearing all previous answers. | x |
| **Loading the contact** | Verify that the contact loads correctly when the page is opened. | x |
| **Valid email required for message submission** | Verify that the form does not allow message submission unless a valid email address is entered. | x |
| **Submit message functionality** | Ensure that clicking the "Send" or "Submit" button sends the message successfully when all required fields are correctly filled. | x |

**Legend:**
- `x`: Pass
- `-`: Fail (to be documented with reasons if encountered)

## Lighthouse scores:

- Performance: 100%
- Accessibility: 85%
- Best Practice: 100%
- SEO: 90%

![lh-test](readme-images/lh-test.png)

---

## \:clap: Credits

* **Content**: [Brad Traversy - 50projects50days](https://github.com/bradtraversy/50projects50days/tree/master/content-placeholder)
* **Inspiration from**: [3d-boxes-background - Brad Traversy](https://github.com/bradtraversy/50projects50days/tree/master/3d-boxes-background)

---

## \:camera: Media

 **All images on this webpage are either downloaded or linked from Unsplash. You can find the links below:**

https://media.istockphoto.com/id/1074797524/sv/foto/bild-av-showcase-med-flaskor-med-schampo-och-balsam.jpg?s=2048x2048&w=is&k=20&c=hOo93bzAhSO4gQ6YtTp0N8B3c_B_vGpowOCf8il8P1o=

https://plus.unsplash.com/premium_photo-1680853621273-c5e174898f1f?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://plus.unsplash.com/premium_photo-1661672325251-683e6f7dea00?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://images.unsplash.com/photo-1696091997052-f52f85285d8d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://images.unsplash.com/photo-1589876518759-5b460cabcc4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://media.istockphoto.com/id/1658893205/sv/foto/make-up-products-at-pink-background-top-view.jpg?s=2048x2048&w=is&k=20&c=R4A4iuQefwdoDZYk0Zz97s17vuV-B48a4ngphT0cL0E=

https://media.istockphoto.com/id/1358832083/sv/foto/paintbrushes-on-a-pink-background-glamorous-makeup-artist-table-brushes-for-applying-powder.jpg?s=2048x2048&w=is&k=20&c=SBd_OTJx4hDwYoLgTkCre8vMM1EfuLW4BJrhn_Dg5-s=

https://media.istockphoto.com/id/1688862517/sv/foto/pink-skin-care-routine-products.jpg?s=2048x2048&w=is&k=20&c=4HSresG5r5I9eHPqqcaFZgJn0Gq1hLVVkXrirVHYiLQ=

https://images.unsplash.com/photo-1715220169023-c1d5c8d2be37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://images.unsplash.com/photo-1666622834106-4559bb3c76a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://media.istockphoto.com/id/640276164/sv/foto/professional-barber-getting-rid-of-male-stubble.jpg?s=2048x2048&w=is&k=20&c=Zgztwo8Zph_6WpuQKUo2OU-DQHGrOrRFa-6aYDxcQ7E=

https://media.istockphoto.com/id/175725740/sv/foto/highlight-hair-texture-background.jpg?s=2048x2048&w=is&k=20&c=XEB74rhwEYe7kK2S2tKedKeQJnlzZvFDLym7VYil9jg=

https://media.istockphoto.com/id/1307578256/sv/foto/process-f%C3%B6r-applicering-av-blekpulver-p%C3%A5-klienter-h%C3%A5r-och-omslag-i-folien-shatush-teknik.jpg?s=2048x2048&w=is&k=20&c=jp7wz_r1uIgMjp8NeTqTBWgrTjmUUrbI1LTwtmC-FFY=

https://images.unsplash.com/photo-1546561925-a427a021303a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://media.istockphoto.com/id/1066846954/sv/foto/h%C3%A5rtv%C3%A4tt.jpg?s=2048x2048&w=is&k=20&c=gUp3ZvzyacH4m2u_IO3dyQ5n-JZFb-CTAMrJDsLvWaM=

https://media.istockphoto.com/id/931164704/sv/foto/fris%C3%B6r-och-kunden-diskutera-besluta-att-v%C3%A4lja-hur-man-klippa-h%C3%A5ret-i-fris%C3%B6rsalong.jpg?s=2048x2048&w=is&k=20&c=kyr3JAMBOeNj6q2yyLLsYEMsBcEv3r6573tChdTouXc=

https://media.istockphoto.com/id/1215895445/sv/foto/kvinnlig-fris%C3%B6r-g%C3%B6r-frisyr-p%C3%A5-ung-kvinna-med-brunett-h%C3%A5r-i-salongen.jpg?s=2048x2048&w=is&k=20&c=L8KNG-zqa9aXcmCfv4E-Zq5BqqV4t-2uq9J2X3thWu8=

https://images.unsplash.com/photo-1650453943723-01b0fc230953?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://plus.unsplash.com/premium_photo-1682097691349-afa9e86a166c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://media.istockphoto.com/id/1272125861/sv/foto/n%C3%A4rbild-av-kvinnligt-%C3%B6ra-med-%C3%B6rh%C3%A4ngen.jpg?s=2048x2048&w=is&k=20&c=bHtTo2phaB0FoX7urpu8DPEs7xXeUmBQnv87NWZxeas=

https://media.istockphoto.com/id/1482180653/sv/foto/recyclable-craft-paper-bag-for-purchases-gifts-and-takeaway-food-mock-up-on-black-background.jpg?s=2048x2048&w=is&k=20&c=P6G3PlXktKv9Xftx5SvRlTGKJVjFVrYTpvOApjR-Wjc=

https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D


## Acknowledgments
- I would like to thank my teacher, friends, and family for their support throughout this project
- Special thanks to mentor Brian Macharia for guidance and constructive feedback during the project.

### Amanda​