import '../css/App.css';
import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
   const [selectedVideo, setSelectedVideo] = useState(null);
   const [videos, search] = useVideos('News')

   // Sets the selected video to the first video in the videos array.
   useEffect(() => {
      setSelectedVideo(videos[0]);
   }, [videos]);

   return (
      <div className='ui container'>
         <SearchBar onFormSubmit={search} />
         <div className='ui grid'>
            <div className='ui row'>
               <div className='eleven wide column'>
                  <VideoDetail selectedVideo={selectedVideo} />
               </div>
               <div className='five wide column'>
                  <VideoList setSelectedVideo={setSelectedVideo} videos={videos} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default App;