import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>This is myapp function</h2>
    </div>
  )
}
// const reactElement = {
//    type: 'a',
//    props: {
//       href: 'https://www.google.com/',
//       target: '_blank'
//    },
//    children: 'Click on me to visit google'
// }

const anotherUser = "evaluated expression."   // this is a evaluated expression that will be injected at the end of children in the reactElement.
const Element = (
  <a href='https://www.google.com'target='_blank'>
    Click on me to visit google
  </a>
)

const reactElement = React.createRoot(
  'a',
  {href:'https.//www.google.com',target:'_blank'},
  'click on me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
 < Element/>
)
