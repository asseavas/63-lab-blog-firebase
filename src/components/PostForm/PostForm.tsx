import React, { useCallback, useEffect, useState } from 'react';
import { ApiPost } from '../../types';
import axiosApi from '../../axiosApi';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const initialState = {
  date: '',
  title: '',
  text: '',
};

const PostForm = () => {
  const [post, setPost] = useState<ApiPost>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;

  const fetchPost = useCallback(async (postId: string) => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiPost | null>(
      '/posts/' + postId + '.json',
    );

    if (response.data) {
      setPost(response.data);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (postId !== undefined) {
      void fetchPost(postId);
    } else {
      setPost(initialState);
    }
  }, [postId, fetchPost]);

  const onFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (postId) {
        await axiosApi.put('/posts/' + postId + '.json', post);
      } else {
        const newPost = {
          ...post,
          date: formatDate(new Date()),
        };

        await axiosApi.post('/posts.json', newPost);
      }
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };

  let form = (
    <div className="rounded-4 bg-light-subtle p-4 px-5 w-50">
      <form onSubmit={onFormSubmit} className="w-100">
        <h4 className="my-4 text-center">
          {postId ? 'Редактировать' : 'Создать новый пост'}
        </h4>
        <div className="form-group">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Заголовок"
            className="form-control bg-body-secondary border-0 rounded-4 p-3"
            required
            onChange={onFieldChange}
            value={post.title}
          />
        </div>
        <div className="form-group">
          <textarea
            name="text"
            id="text"
            className="form-control mt-4 bg-body-secondary border-0 rounded-4 p-3"
            placeholder="Текст"
            required
            onChange={onFieldChange}
            value={post.text}
          />
        </div>
        <div className="w-100 d-flex">
          <button
            type="submit"
            className="btn btn-primary mt-4 ms-auto px-5 rounded-3"
          >
            {postId ? 'Сохрнаить' : 'Создать'}
          </button>
        </div>
      </form>
    </div>
  );

  if (isLoading) {
    form = (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '300px' }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container pt-5 d-flex justify-content-center">{form}</div>
  );
};

export default PostForm;
