import React, { useState, useEffect } from 'react';

import YouTube from '../apis/YouTube';

const useVideos = (defaultSearchTerm) => {
   const [videos, setVideos] = useState([]);

   // Sets the term to 'News' whenever the page loads.
   useEffect(() => {
      search(defaultSearchTerm);
   }, [defaultSearchTerm]);

   // Gets the data from Youtube.
   const search = async (term) => {
      const response = await YouTube.get('/search', {
         params: {
            q: term,
         }
      });

      setVideos(response.data.items);
   };

   return [videos, search];
};

export default useVideos;