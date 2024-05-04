Aim: to implement redux, https://todo-list-omega-amber-35.vercel.app/

Redux is a state management library that helps you better manage state in your applications.

In this project, i have implemented redux concept where the App.jsx is wrapped in a provider such that the state of this component is global and can be accessed by its children.

Major parts of Redux:

Actions: The only way through which the state changes is through actions, therefore actions such as add and remove list is defined.

Redux store: The Redux store is the main, central bucket that stores all the states of an application. It should be considered and maintained as a single source of truth for the state of the application.

Reducers: Reducers take in two things: a previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state.

Whenever an action is dispatched, all the reducers are activated. Each reducer filters out the action using a switch statement switching on the action type. Whenever the switch statement matches with the action passed, the corresponding reducers take the necessary action to make the update and return a fresh new instance of the global state.
