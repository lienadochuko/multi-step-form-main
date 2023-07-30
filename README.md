# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge
 
Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.jpg)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [multi-step-form](https://github.com/lienadochuko/multi-step-form-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/documentation/) - React framework

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

-Data Transfer
-Problem with SVG Manipulation

To see how you can add code snippets, see below:

```js
let navigator = useNavigate();
    let location = useLocation();
    const {
        formValue,
        formValue1,
        formValue2,
        formValues15,
        formValues14,
        formValues13 } = location.state;

    const [formErrors, setFormErrors] = useState({});
    const [formValues4, setFormValue4] = useState([]);
    const [formValues5, setFormValue5] = useState([]);
    const [isSubmit, setisSubmit] = useState(false);
    const [isSubmit1, setisSubmit1] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(selectedOption, selectedOption2, selectedOption3));
        setisSubmit(true)
        // console.log(totalValue);
    };

    useEffect(() => {
        setFormValue4(totalValue);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            if (formValue == null || formValue1 == null || formValue2 == null || formValue === '' || formValue1 === '' || formValue2 === '') {
                const statesToPass = {
                    formValue5: formValues15,
                    formValue1: formValues14,
                    formValue2: formValues13,
                    formValues4: formValues4
                };
                navigator('../Page4', { state: statesToPass });
            } else {
                const statesToPass = {
                    formValue5: formValue,
                    formValue1: formValue1,
                    formValue2: formValue2,
                    formValues4: formValues4
                };
                navigator('../Page4', { state: statesToPass });
            }
            console.log(location.state)
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [formErrors, selectedOption, selectedOption2, selectedOption3, isSubmit])



    const goBack1 = (e) => {
        e.preventDefault();
        setisSubmit1(true);
    }


    useEffect(() => {
        setFormValue5(formValue);
        if (isSubmit1) {
            const statesToPass = {
                formValue5: formValues5,
            };
            navigator('../Page2', { state: statesToPass });
            // console.log(formValues5)
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedOption, selectedOption2, selectedOption3, isSubmit1])

    const validate = (values) => {
        const errors = {};
        if (selectedOption === '' && selectedOption2 === '' && selectedOption3 === '') {
            errors.options = "Please select an plan"
        }
        return errors;
    }

```
if date looping was thing....lol

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

-Better Techniques for data tranfer been page modules.
-using local storage in the place of useStates

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Radio-Input](https://www.geeksforgeeks.org/how-to-get-multiple-checkbox-values-in-react-js/) - This helped me for working with Radio inputs and alzo the design inspiration. I really liked this pattern and will use it going forward.
- [CheckBox](https://codepen.io/echosoft/pen/RaVEvG) - This is an amazing article which helped me finally understand checkBox. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Daniel Erhisohwode](https://erhisdaniel.netlify.app/)
- Frontend Mentor - [@lienadochuko](https://www.frontendmentor.io/profile/lienadochuko)
- Twitter - [@erhisO](https://www.twitter.com/erhisO)

