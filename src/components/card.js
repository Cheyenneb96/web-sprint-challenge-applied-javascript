const axios = require('axios').default
const Card = (article) => {
  console.log(article)
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imageDiv = document.createElement('div')
  const img = document.createElement('img')
  const nameSpan = document.createElement('span')

  cardDiv.classList.add('card')
  headlineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imageDiv.classList.add('img-container')
  cardDiv.style.cursor = 'pointer'
  
  headlineDiv.textContent = article.headline
  nameSpan.textContent = article.authorName
  img.src = article.authorPhoto

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imageDiv)
  authorDiv.appendChild(nameSpan)
  imageDiv.appendChild(img)

  cardDiv.addEventListener('click', () => {
    console.log(article.headline)
  })


return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardContainer = document.querySelector(selector)
  
  const getArticles = async () => {
    try {
      const data = await axios.get('http://localhost:5000/api/articles')
      const subjects = data.data.articles
      const values = Object.values(subjects)
      const articlesArray = [].concat.apply([], values)
      articlesArray.forEach((article) => {
        cardContainer.appendChild(Card(article))
      })
    } catch (err) {
      console.log(err)
    }
  }
  getArticles()





}

export { Card, cardAppender }

console.log(
  "%cI've been trying to reach you about your car's extended warranty",
  "color:white;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold"
  )