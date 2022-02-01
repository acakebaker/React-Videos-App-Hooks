import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, setSelectedVideo }) => {
   // Maps through each video and sends the key, title, and image to VideoItem.
   const mappedVideos = videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} setSelectedVideo={setSelectedVideo} />;
   });

   return (
      <div className="ui relaxed list">
         {mappedVideos}
      </div>
   );
}

export default VideoList;