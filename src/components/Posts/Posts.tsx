import React from 'react';
import { Post } from '../../types';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="d-flex flex-column align-items-center gap-3 pt-5">
      <h3 className="text-center">All posts</h3>
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
    </div>
  );
};

export default Posts;
