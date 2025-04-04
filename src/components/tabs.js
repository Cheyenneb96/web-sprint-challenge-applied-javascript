// import { javascript } from "webpack"
const axios = require('axios').default
import { topics } from "../mocks/data"

const Tabs = (topicsArray) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const mainDiv = document.createElement('div')


  mainDiv.classList.add('topics')
  

  topicsArray.forEach((topic) => {
    const topicDiv = document.createElement('div')
    topicDiv.classList.add('tab')
    topicDiv.textContent = topic
    mainDiv.appendChild(topicDiv)
  })
  
  return mainDiv
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //try {

    
    
    // const topicsValues = Object.values(topics)
    // const topicsArray = topicsValues[0]
    const tabsContainer = document.querySelector(selector)

    const getTopics = async () => {
      try {
        const data = await axios.get('http://localhost:5000/api/topics')
        const topicsArray = data.data.topics
        tabsContainer.appendChild(Tabs(topicsArray))
      } catch (err) {
        console.log(err)
      }
    }
    getTopics()

}

export { Tabs, tabsAppender }
