import "./App.css";

import { useEffect } from "react";
import ApiRequest from "./services/apiRequest";
import Routing from "./routing/Routing";

function App() {
  //ckeck if there is a remembered user and log him in if there is, using refresh token for authentication and recieve new access token
  useEffect(() => {
    const handleRememberedUser = async () => {
      if (!localStorage.getItem("refreshToken")) return;

      const response = await ApiRequest.refresh(
        localStorage.getItem("refreshToken")
      );
      if (!response.accessToken) return;

      if (response.accessToken) {
        sessionStorage.setItem("accessToken", response.accessToken);
        sessionStorage.setItem("userId", response.id);
        sessionStorage.setItem("role", response.role);
      }
      //!!!!!!!!!!!Here we should redirect to the user profile page depending on the role (Part of David Bonora's task)
    };
    (async () => handleRememberedUser())();
  }, []);

  return <Routing />;
  
export default App;
