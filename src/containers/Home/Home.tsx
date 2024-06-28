import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import { ApiPosts, Post } from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const isNestedRoute = location.pathname !== '/';

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiPosts | null>('/posts.json');

    const postsResponse = response.data;

    if (postsResponse !== null) {
      const posts: Post[] = Object.keys(postsResponse).map((id: string) => {
        return {
          ...postsResponse[id],
          id,
        };
      });

      setPosts(posts);
    } else {
      setPosts([]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

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
