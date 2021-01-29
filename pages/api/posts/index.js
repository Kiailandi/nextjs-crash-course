import { posts } from '../../../data';

const handler = (req, res) => {
    res.status(200).json(posts);
}

export default handler;