1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
   - This assignment took me about 5 hours. If I had more time I would work more on the tests.

2) What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

   - React hooks. Starting off with stateful components, I found that using react hooks optimizes the code as you add a state to a function.

```javascript
//here I created a hook to toggle a modal
const [modal, toggleModal] = useState(false);
```

3. How would you track down a performance issue in production? Have you ever had to do this?

   - I never had to track down a performance issue in production, however to do so I would have to try and recreate what happened and look at the debugging tool in the browser.

4. How would you improve the API that you just used?

   - The restaurant object that gets returned on filter, has a lot of information. I would refine the details to a few necessary information needed, and the extra information can be requested with a get request with the restaurant id.

5. Please describe yourself using JSON.

```json
{
  "firstName": "Kayla",
  "lastName": "Noronha",
  "location": "Toronto, ON",
  "developer": {
    "type": "Full-Stack",
    "techStack": [
      "React",
      "React Native",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "MySQL"
    ]
  },
  "interests": ["Hiking", "Cooking", "Reading", "Traveling"]
}
```
