import React from "react";
import { useSelector } from "react-redux";
import { Route, Link, useRouteMatch } from "react-router-dom";
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";

export default function Profile() {
  const currentUser = useSelector(selectCurrentUser);
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
  let { url, path } = useRouteMatch();

  // use loggedIn to return a Redirect

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`${url}/edit`}>Edit</Link>
      {/* Render a route for EditProfileForm */}
      <Route path={`${path}/edit`}>
        <EditProfileForm />
      </Route>
    </main>
  );
}
