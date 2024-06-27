import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import { Post } from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const isNestedRoute = location.pathname !== '/';

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axiosApi.get<{ [key: string]: Post }>(
          '/posts.json',
        );
        const postsArray = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
        setPosts(postsArray);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchPosts();
  }, []);

  return (
    <>
      {!isNestedRoute && (
        <div className="container">
          {isLoading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: '300px' }}
            >
              <Spinner />
            </div>
          ) : (
            <Posts posts={posts} />
          )}
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Home;
