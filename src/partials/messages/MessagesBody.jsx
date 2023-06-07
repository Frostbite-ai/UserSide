import React from "react";

function MessagesBody() {
  return (
    <div className="grow sm:px-6 py-6">
      <iframe
        style={{ border: "none" }}
        className="h-full w-full"
        src="https://widget.kommunicate.io/chat?appId=21ddca0ed548ffe808f7f7f2e535b84ff"
        allow="microphone; geolocation;"
      ></iframe>
    </div>
  );
}

export default MessagesBody;
