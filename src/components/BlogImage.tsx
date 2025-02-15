import { Image } from 'antd';
interface BlogImageProps {
    imgUrl: string;
}
const BlogImage = ({ imgUrl }: BlogImageProps) => {
    return <Image src={imgUrl} />
}
export default BlogImage;