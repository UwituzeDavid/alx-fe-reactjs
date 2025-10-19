import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { postId } = useParams();
  return <div>Viewing blog post #{postId}</div>;
}
