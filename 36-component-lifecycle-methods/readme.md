# React Lifecycle Methods

## What are lifecycle methods?
[diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Parent && child lifecycle methods

```js
constructor() {
  super()
  console.log(this.__proto__.constructor.name, "constructor")
}

componentDidMount() {
  console.log(this.__proto__.constructor.name, "mounting")
}

componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update")
}
```

## why are we fetching data from a 'remote' 'server'

## how to use json-server

- why \_db.json

## Discussion - how are the paintings showing up in App? Let's talk about componentDidMount()
`Discuss the importance of setting up a default state so the application can render without waiting for the data to be fetched.`

## Let's start counting time in App - why is this 'ok' ? Do you see any problems?

```js
state = {
  searchInput: '',
  paintings: [],
  time: new Date()
};

startCountingTime = () => {
  setInterval(() => {
    this.setState({ time: new Date() });
  }, 1000);
};

componentDidMount() {
  this.getPaintings();
  this.startCountingTime();
}

// in render
const { time } = this.state;
// in render return
<div>{time.toTimeString()}</div>

```

## Let's do the same in Painting

```js
state = {
  time: new Date()
};

startCountingTime = () => {
  this.handle = setInterval(() => {
    this.setState({ time: new Date() });
  }, 1000);
};

stopCountingTime = () => {
  clearInterval(this.handle);
};

componentDidMount() {
  this.startCountingTime();
}

componentWillUnmount() {
  console.log(
    `I'm ${this.props.painting.title}. WHY ARE YOU DOING THIS TO ME?!?!?!`
  );
  this.stopCountingTime();
}

render() {
  const { painting, deletePainting } = this.props;
  const { time } = this.state;
  return (
    <div onClick={() => deletePainting(painting.id)} className="painting">
      <div>{time.toTimeString()}</div>
      <h1>{painting.title}</h1>
      <p>{painting.artist.name}</p>
      <img src={painting.image} alt="" />
    </div>
  );
}
```

## What does setTimeout() return?

## Why should you never setState in render()

## API Class

## key in PaintingList

```js
  key={painting.id}
```

## optimistic rendering on delete

why is this bad

```js
deletePainting = id => {
  API.deletePainting(id);
  const paintings = this.state.paintings.filter(painting => painting.id !== id);
  this.setState({ paintings });
};
```

why is this good

```js
deletePainting = id => {
  API.deletePainting(id)
    .then(() => {
      const paintings = this.state.paintings.filter(
        painting => painting.id !== id
      );
      this.setState({ paintings });
    })
    .catch(() => alert('Unable to delete. Please try again later.'));
};
```

## should component update - big foot gun

## willUnmount for ga, websockets, cancelling tasks
