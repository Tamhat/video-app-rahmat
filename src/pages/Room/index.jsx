import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appID = 962087392;
    const serverSecret = "f6470c277e06d6d652e4d72e6a9b9601";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Rahmat Ullah"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://video-app-rahmat.vercel.app/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: true,
      
    });
    

  };

  return (
    <div>
      <div ref={myMeeting} 
      style={{ width: '100%', height: '100vh' }}
      />
    </div>
  );
};

export default RoomPage;
