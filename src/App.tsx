import Toolbar from './components/Toolbar/Toolbar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import OnePost from './containers/OnePost/OnePost';
import PostForm from './components/PostForm/PostForm';
import './App.css';

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":postId" element={<OnePost />} />
          </Route>
          <Route path="/new-post" element={<PostForm />} />
          <Route path="/posts/:postId/edit" element={<PostForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="*"
            element={<h1 className="text-center">Not found!</h1>}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
