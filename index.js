import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./src/redux/reducers/index";
import { Provider } from "react-redux";
import { createFirestoreInstance, reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "./firebase";
import "firebase/auth";
import thunk from "redux-thunk";
// import middlewareLogger from "./middleware/middleware-logger";

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }), middlewareLogger),
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider { ...rrfProps }>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

