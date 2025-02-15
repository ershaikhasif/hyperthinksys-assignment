import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppHeader from "./components/Header";
import TabsComponent from "./components/Tabs";
const { Content } = Layout;


// Sample pages
const Dashboard = () => <Content className="flex"><h1> Dashboard Content</h1>
  <p>React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix[a]. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[11][12] A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.
  </p></Content>;
const Blogs = () =>
(
  <Content>
    <h1>Blogs Content</h1>
    <TabsComponent />
  </Content>
);


function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}

        <Layout style={{ width: 'auto' }}>

          <AppHeader />
          <Layout >
            <Content style={{ padding: "20px", width: '100%', background: "#f0f2f5" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/blogs" element={<Blogs />} />
              </Routes>

            </Content>
          </Layout>

        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
