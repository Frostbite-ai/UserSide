import React, { useEffect } from "react";

const DialogflowMessenger = () => {
  useEffect(() => {
    const dfMessengerScript = document.createElement("script");
    dfMessengerScript.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    dfMessengerScript.async = true;

    window.addEventListener("dfMessengerLoaded", function (event) {
      const dfMessenger = document.querySelector("df-messenger");
      dfMessenger.setAttribute(
        "agent-id",
        "d0c7c75c-05c9-46bf-b757-e5a1ebd77776"
      );
      dfMessenger.setAttribute("language-code", "en");
      dfMessenger.setAttribute("chat-title", "Team");
      dfMessenger.setAttribute("intent", "WELCOME");
    });

    document.body.appendChild(dfMessengerScript);
  }, []);

  return <df-messenger></df-messenger>;
};

export default DialogflowMessenger;
