import { posts } from '../../../data';

const handler = ({ query: { id }}, res) => {
    const filtered = posts.find(post => post.id === id);

    if(filtered != null) {
        res.status(200).json(filtered);
    } else {
        res.status(400).json({ message: `Post with id ${id} not found`});
    }
}

export default handler;