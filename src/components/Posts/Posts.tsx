import React from 'react';
import { Post } from '../../types';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="d-flex flex-column gap-3 py-4">
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
