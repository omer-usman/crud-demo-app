import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button } from 'antd';
import { deleteCourse } from '../redux/actions';

const CourseList = () => {
  const courses = useSelector(state => state.courses);
  const userRole = useSelector(state => state.userRole);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={courses}
      renderItem={course => (
        <List.Item
          actions={userRole === 'admin' ? [
            <Button type="link">Edit</Button>,
            <Button type="link" onClick={() => handleDelete(course.id)}>Delete</Button>
          ] : []}
        >
          <List.Item.Meta
            title={course.title}
            description={course.description}
          />
        </List.Item>
      )}
    />
  );
};

export default CourseList;