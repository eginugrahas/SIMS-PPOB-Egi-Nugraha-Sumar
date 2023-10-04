import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import ErrorPage from "./pages/404.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import MainLayout from "./layout/mainLayout.jsx";
import TopUpPage from "./pages/TopUp.jsx";
import TransactionPage from "./pages/Transaction.jsx";
import AccountPage from "./pages/Account.jsx";

const persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/topup",
        element: <TopUpPage />,
      },
      {
        path: "/transaction",
        element: <TransactionPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
