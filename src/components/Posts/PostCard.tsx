import React from 'react';
import { Post } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="card rounded-4 border-0 pt-3 pb-2 px-2 w-75">
      <div className="card-body">
        <h5 className="card-title mb-3">{post.title}</h5>
        <p className="card-text mb-2">
          <small className="text-body-secondary">{post.date}</small>
        </p>
        <p className="card-text">{post.text}</p>
        <Link to={post.id} className="btn btn-primary mt-2 px-4 rounded-3">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
