import React, { useCallback, useEffect, useState } from 'react';
import { Post } from '../../types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const OnePost: React.FC = () => {
  const [post, setPost] = useState<null | Post>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = useParams();
  const postId = params.postId;
  const navigate = useNavigate();

  const fetchOnePost = useCallback(async (postId: string) => {
    setIsLoading(true);
    const response = await axiosApi.get<Post | null>(
      '/posts/' + postId + '.json',
    );

    if (response.data) {
      setPost(response.data);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (postId !== undefined) {
      void fetchOnePost(postId);
    }
  }, [postId, fetchOnePost]);

  const deletePost = async () => {
    try {
      await axiosApi.delete('/posts/' + postId + '.json');
      navigate('/');
    } catch (error) {
      console.error('There was an error!', error);
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

  if (!post) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '300px' }}
      >
        <p>Пост не найден</p>
      </div>
    );
  }

  return (
    <div className="container pt-5 d-flex justify-content-center">
      <div className="w-50 card rounded-4 border-0 pt-5 pb-4 px-4">
        <h3 className="text-center mb-4">Пост</h3>
        <div className="card-body">
          <h5 className="card-title mb-3">{post.title}</h5>
          <p className="card-text mb-2">
            <small className="text-body-secondary">{post.date}</small>
          </p>
          <p className="card-text">{post.text}</p>
          <div className="d-flex gap-3">
            <Link
              to={'/posts/' + postId + '/edit'}
              className="btn btn-primary mt-2 px-4 rounded-3 ms-auto"
            >
              Редактировать
            </Link>
            <button
              className="btn btn-danger mt-2 px-4 rounded-3"
              onClick={deletePost}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePost;
