import { Col, Row } from 'antd';

import useUserData from '../hooks/userData';
import BlogImage from './BlogImage';
import '../style/style.css';
interface BlogItemsProps {
    userId: number;
}


const imageUrlArr: string[] = [
    "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2",
    "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2",
    "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2"

]
const BlogItems: React.FC<BlogItemsProps> = ({ userId }) => {
    const { user, loading } = useUserData(userId);
    
    return (

        !loading && user && <div>
            {
                user.map((element, index) => (
                    <Row key={index} className='padding10'>
                        <Col span={3}><BlogImage imgUrl={imageUrlArr[Math.floor(Math.random() * 3)]} /></Col>
                        <Col span={12} className='padding10'>{element.body}</Col>
                    </Row>
                ))
            }
        </div >

    )
}
export default BlogItems;