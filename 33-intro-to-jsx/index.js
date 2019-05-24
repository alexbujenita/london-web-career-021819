// INTRO TO JSX

// props = {stuff: 'value'}
function Title (props) {
  return React.createElement('h1', { className: 'title', id: props.id }, props.text)
}

const Article = props => {
  return React.createElement('div', {className: 'article'}, [
    React.createElement('h2', {}, props.title),
    React.createElement('p', {}, props.content),
    React.createElement('img', {src: props.image})
  ])
} 

// <div>
//  <h2>Title</h2>
//  <p>content</p>
//  <img src='' />
// </div>



/*
<div class="ui inverted orange menu">
  <a class='item'>
    <h2 class="ui header">
      <i class="paw icon"></i>
      <div class="content">
        ZooKeepr
      </div>
      <div class="sub header">
        Keep track of your animals
      </div>
    </h2>
  </a>
</div>
*/

// const NavBar = props => {
//   return React.createElement('div', { className: `ui inverted ${props.color} menu` },
//     React.createElement('a', { className: 'item' },
//       React.createElement('h2', { className: "ui header" }, [
//         React.createElement('i', { className: `${props.icon} icon` }),
//         React.createElement('div', { className: "content" }, props.content),
//         React.createElement('div', { className: "sub header" }, props.subHeader)
//       ])
//     )
//   )
// }

const NavBar = props => {
  return <div className={`ui inverted ${props.color} menu`}>
    <a className='item'>
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
          {props.content}
        </div>
        <div className="sub header">
          {props.subHeader}
        </div>
      </h2>
    </a>
  </div>
}

const App = props => {
  return React.createElement('div', {className: 'app'}, [
    NavBar({content: 'My React App', subHeader: 'Awesome!', color: 'blue', icon: 'react'}),
    <Title text="Welcome to ReactDaily!" id="title-1" />,
    Article({title: 'My first article', content: 'Yay, we made an article!', image: 'https://www.coe.int/documents/7354802/32103489/opinion.jpg/2496310e-7dc4-5d52-6164-edd6c9a9100d?t=1515493038000'}), 
    Article({title: 'My second article', content: 'Yay, we made an article!', image: 'https://www.coe.int/documents/7354802/32103489/opinion.jpg/2496310e-7dc4-5d52-6164-edd6c9a9100d?t=1515493038000'}), 
    Article({title: 'My third article', content: 'Yay, we made an article!', image: 'https://www.coe.int/documents/7354802/32103489/opinion.jpg/2496310e-7dc4-5d52-6164-edd6c9a9100d?t=1515493038000'}), 
    NavBar({content: 'My little penguin', subHeader: 'Rainbow dash!', color: 'pink', icon: 'qq'}),
  ])
}

const root = document.querySelector('#root')
ReactDOM.render(
  // what to add
  <App />,
  // where to add it to
  root
)
