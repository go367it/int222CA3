import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Video({ match }) {
  const id = useParams().id;
  const domain = "https://satyamint222.daily.co/";

  useEffect(() => {
    console.log(id);

    axios
      .get(`http://localhost:5000/video-call/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const script = document.createElement("script");
          script.innerHTML = `window.DailyIframe.createFrame({
              iframeStyle: {
                position: "relative",
                width: "100%",
                height: "100vh",
                border: "0",
                zIndex: 9999
              },
              showLeaveButton: true,
              showFullscreenButton: true,
            }).join({
              url: "${domain}${id}",
            });`;

          document.body.appendChild(script);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
}
