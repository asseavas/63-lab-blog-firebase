import React, { useEffect, useState } from 'react';
import { NewPost, Post } from '../../types';
import axiosApi from '../../axiosApi';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const PostForm = () => {
  const [post, setPost] = useState<NewPost>({
    date: '',
    title: '',
    text: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        setIsLoading(true);
        try {
          const { data } = await axiosApi.get<Post>(
            '/posts/' + postId + '.json',
          );
          setPost(data);
        } finally {
          setIsLoading(false);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const onFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (postId) {
        await axiosApi.put('/posts/' + postId + '.json', post);
      } else {
        await axiosApi.post('/posts.json', post);
      }
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '300px' }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container pt-5">
      <form onSubmit={onFormSubmit}>
        <h4 className="mb-4 text-center">
          {postId ? 'Edit post' : 'Add new post'}
        </h4>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="form-control"
            onChange={onFieldChange}
            value={post.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Text</label>
          <textarea
            name="text"
            id="text"
            className="form-control"
            onChange={onFieldChange}
            value={post.text}
          />
        </div>
        <div className="w-100 d-flex">
          <button type="submit" className="btn btn-primary mt-4 ms-auto px-5">
            {postId ? 'Save' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
