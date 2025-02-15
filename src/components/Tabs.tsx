import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import BlogItems from './BlogItems';
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All Post',
    children: <BlogItems userId={4}/>,
  },
  {
    key: '2',
    label: 'Latest Post',
    children: <BlogItems userId={5}/>,
  },
  {
    key: '3',
    label: 'Archeived',
    children: <BlogItems userId={6}/>,
  },
];



const App: React.FC = () => {

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
};

export default App;