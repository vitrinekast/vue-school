data = {
  threads: {
    t1: {
      '.key': 't1',
      title: 'my first thread',
      publishedAt: '',
      posts: {
        p1: 'p1'
      },
      userId: 'u1'
    }
  },
  posts: {
    p1: {
      '.key': 'p1',
      publishedAt: '',
      userId: 'u1',
      text: 'Hi there',
      threadId: 't1'
    }
  },
  users: {
    u1: {
      name: 'Alice',
      '.key': 'u1',
      threads: {
        't1'
      },
      posts: {
        'p1'
      }
    }
  },
  forums: {
    f1: {
      '.key': 'f1',
      name: 'Fishing',
      description: '',
      categoryId: 'c1',
      threads: {
        t1: 't1
      }
    }
  },
  categories: {
    c1: {
      '.key': 'c1',
      name: 'Discussions',
      forums: {
        'f1'
      }
    }
  }
}
