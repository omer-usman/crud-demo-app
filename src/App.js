import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import { Layout, Menu, Button } from 'antd';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { setUserRole } from './redux/actions';
import ProtectedRoute from './components/ProtectedRoute';

const { Header, Content } = Layout;

const AppContent = () => {
  const dispatch = useDispatch();
  const userRole = useSelector(state => state.userRole);

  const switchUserRole = () => {
    const newRole = userRole === 'admin' ? 'user' : 'admin';
    dispatch(setUserRole(newRole));
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Courses</Link>
          </Menu.Item>
          {userRole === 'admin' && (
            <Menu.Item key="2">
              <Link to="/add-course">Add Course</Link>
            </Menu.Item>
          )}
          <Menu.Item key="3">
            <Button type="primary" onClick={switchUserRole}>
              Switch to {userRole === 'admin' ? 'User' : 'Admin'}
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/add-course" element={<ProtectedRoute element={CourseForm} />} />
        </Routes>
      </Content>
    </Layout>
  );
};

const App = () => (
  <Provider store={store}>
    <Router>
      <AppContent />
    </Router>
  </Provider>
);

export default App;