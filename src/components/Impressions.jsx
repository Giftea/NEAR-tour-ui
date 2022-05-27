/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import { IconButton, Box } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { likeTour, dislikeTour, unLikeTour, unDislikeTour } from '../utils/tour';

const Impressions = ({ id, address, likes, dislikes }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [loading, setLoading] = useState(true);

  const likeFunc = async (id) => {
    if (liked) {
      return await unLikeTour({ id: id });
    } else {
      return await likeTour({ id: id });
    }
  };
  const dislikeFunc = async (id) => {
    if (disliked) {
      return await unDislikeTour({ id: id });
    } else {
      await dislikeTour({ id: id });
    }
  };
  useEffect(async () => {
    setLiked(likes.includes(address));
    setDisliked(dislikes.includes(address));
    setLoading(false);
  }, []);

  let primaryLike = liked ? 'primary' : 'default';
  let primaryDislike = disliked ? 'primary' : 'default';

  return (
    <>
      {loading ? (
        <p>...</p>
      ) : (
        <>
          <Box>
            <IconButton color={primaryLike} onClick={() => likeFunc(id)}>
              <ThumbUp />
            </IconButton>
          </Box>
          <Box>
            <IconButton color={primaryDislike} onClick={() => dislikeFunc(id)}>
              <ThumbDown />
            </IconButton>
          </Box>
        </>
      )}
    </>
  );
};

export default Impressions;
