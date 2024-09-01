import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'The Power of Compounding (Starting an SIP)',
    description:
      'Discover how small, consistent investments can grow exponentially over time with the magic of compounding. Learn the benefits of starting a Systematic Investment Plan (SIP) today.',
    date: 'Jun 13, 2024',
    datetime: '2024-06-13',
    category: { title: 'Finance', href: '#' },
    author: {
      name: 'Jane Doe',
      role: 'Financial Advisor',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Get to Know Mutual Fund Jargon in a Minute',
    description:
      'Mutual funds can seem complex with all the jargon used. In this post, we simplify and explain common mutual fund terms, so you can invest with confidence and understanding.',
    date: 'Jun 14, 2024',
    datetime: '2024-06-14',
    category: { title: 'Finance', href: '#' },
    author: {
      name: 'John Smith',
      role: 'Investment Analyst',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Types of Equity Mutual Funds',
    description:
      'Equity mutual funds come in various types, each catering to different investment needs and risk appetites. Learn about the different types of equity mutual funds to make informed investment decisions.',
    date: 'Jun 15, 2024',
    datetime: '2024-06-15',
    category: { title: 'Finance', href: '#' },
    author: {
      name: 'Alice Johnson',
      role: 'Investment Expert',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
  },

  // More posts...
];

export default function BlogHome() {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wealthify Blog</h2>
          <p className="mt-1 text-xl leading-8 text-gray-600">
            Get started with investing, learn about personal finance, and discover the latest trends in the market.
          </p>
          <button
            onClick={handleNavigateHome} // Attach the navigation function to onClick
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to Home
          </button>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
