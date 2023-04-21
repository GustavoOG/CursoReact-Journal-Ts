import React from "react";
import AppRouter from "./router/AppRouter";
import Apptheme from "./theme/Apptheme";


function JournalApp() {
  return (
    <>
      <Apptheme>
        <AppRouter />
      </Apptheme>
    </>
  );
}

export default JournalApp;
