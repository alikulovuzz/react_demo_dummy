import React from "react";
import muiTheme from "./theme/muiTheme";
import defaultTheme from "./theme/defaultTheme";
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, Router } from "react-router-dom"
import SignInSide from "./components/SignInSide";
import { useSelector } from "react-redux";
import Main from "./components/Main";
import PagePost from "./components/PagePost";
import ErrorPage from "./components/404";
import PageTodos from "./components/PageTodos";
import PageUsers from "./components/PageUser";
import PageTodoUser from "./components/PageTodoUser";
import { Outlet } from 'react-router-dom'


function App() {

  const user = useSelector((state) => state.user);

  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignInSide />} errorElement={<ErrorPage />} />
            {sessionStorage.getItem("access_token") || user ? (<>
              <Route path="/" element={<Main />} errorElement={<ErrorPage />}>
                <Route index element={<PagePost />} />
                <Route path="todo" element={<Outlet />}>
                  <Route index element={<PageTodos />} />
                  {/* <Route path=":id" element={<>Get single todo</>} /> */}
                </Route>
                <Route path="users" element={<Outlet />}>
                  <Route index element={<PageUsers />} />
                  <Route path=":id" element={<PageTodoUser />} />
                </Route>
              </Route>
            </>) : (<></>)}
            <Route path="*" element={<Navigate to={"/login"} errorElement={<ErrorPage />} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
