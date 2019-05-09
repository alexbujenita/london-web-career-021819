const defaultState = {
  count: 0,
  totalClicks: 0,
  clickHistory: []
};

/* store */
const store = Redux.createStore(counter);

/* reducer */
function counter(state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        totalClicks: state.totalClicks + 1,
        clickHistory: [...state.clickHistory, "INCREMENT"]
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        totalClicks: state.totalClicks + 1,
        clickHistory: [...state.clickHistory, "DECREMENT"]
      };
    case "RESET":
      return {
        ...state,
        count: 0,
        totalClicks: state.totalClicks + 1,
        clickHistory: [...state.clickHistory, "RESET"]
      };
    default:
      return state;
  }
}

/* dispatch actions */
function dispatchClickEvent(event) {
  const button = event.target;
  if (button.id === "plus") {
    store.dispatch({ type: "INCREMENT" });
  } else if (button.id === "minus") {
    store.dispatch({ type: "DECREMENT" });
  } else if (button.id === "reset") {
    store.dispatch({ type: "RESET" });
  }
}

/* DOM manipulation functions */
function updateDom() {
  updateCounter();
  updateTotalClicks();
  updateClickHistory();
}

function updateClickHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "";

  const historyEvents = store.getState().clickHistory;

  historyEvents.forEach((historyEvent, index) => {
    const eventElement = document.createElement("p");
    eventElement.innerText = `${index + 1} ${historyEvent}`;

    historyDiv.append(eventElement);
  });
}

function updateTotalClicks() {
  const totalClicks = document.getElementById("total-clicks");
  totalClicks.innerText = store.getState().totalClicks;
}

function updateCounter() {
  const counter = document.getElementById("counter");
  counter.innerText = store.getState().count;
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", dispatchClickEvent);
});

store.subscribe(updateDom);
