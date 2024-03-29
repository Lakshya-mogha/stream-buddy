import { React, useRef, useEffect } from "react";

function UserStream() {
  const userVideo = useRef(null);
  const startStream = useEffect(() => {
    window.addEventListener("load", async() => {
      const media = await navigator.mediaDevices.getUserMedia({
        video: "true",
        audio: "true",
      });
      userVideo.current.srcObject = media;
    });
  });
  return (
    <>
    <div className="border-2 border-black absolute">
    <video ref={userVideo} autoPlay muted></video>
    <button onClick={startStream}> </button>
    </div>
    </>
  );
}
export default UserStream;
