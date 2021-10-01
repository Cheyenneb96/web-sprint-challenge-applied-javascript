const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const div = document.createElement('div')
  const span = document.createElement('span')
  const h1 = document.createElement('h1')
  const span2 = document.createElement('span')

 
  div.classList.add('header')
  span.classList.add('date')
  span2.classList.add('temp')

  h1.textContent = title
  span.textContent = date
  span2.textContent = temp
  div.appendChild(span)
  div.appendChild(h1)
  div.appendChild(span2)

  console.log('AM I HERE?')
  return div
}

const createDate = () => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const fullDate = `${month}/${day}/${year}`
  return fullDate
}

const headerAppender = (selector) => {
  console.log('SELEDCTOR', typeof selector)
  const title = 'Lambda Times'
  const date = createDate()
  const temp = 73
  const headerContainer = document.querySelector(selector)
  headerContainer.appendChild(Header(title, date, temp))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

console.log('OUTSIDE')


export { Header, headerAppender }
