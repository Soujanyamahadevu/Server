const { prisma } = require('../config/database');

const createPost = async (req, res) => {
  const { title, content, poster } = req.body;
  const userId = req.user.id;

  try {
    const post = await prisma.blogPost.create({
      data: { title, content, poster, userId },
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: 'Error creating post' });
  }
};

const getPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const posts = await prisma.blogPost.findMany({
      skip: (page - 1) * limit,
      take: parseInt(limit),
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.blogPost.findUnique({ where: { id: parseInt(id) } });
    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' });
  }
};

module.exports = { createPost, getPosts, getPostById };
