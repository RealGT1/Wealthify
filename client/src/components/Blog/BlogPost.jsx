import { useParams } from "react-router-dom";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import investImage from '../Blog/assets/invest.png';
import compoundImage from '../Blog/assets/compound.png';
// Dummy posts data for the example
const posts = [
  {
    id: 1,
    title: "The Power of Compounding (Starting an SIP)",
    description:
      "Discover how small, consistent investments can grow exponentially over time with the magic of compounding. Learn the benefits of starting a Systematic Investment Plan (SIP) today.",
    date: "Jun 13, 2024",
    datetime: "2024-06-13",
    category: { title: "Finance", href: "#" },
    author: {
      name: "Jane Doe",
      role: "Financial Advisor",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    imageUrl:
      "https://tailwindui.com/img/component-images/financial-growth.png",
  },
  // More posts...
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                {post.category.title}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {post.description}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[40rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={investImage} alt="Financial Growth"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Have you ever wondered how small, regular investments can grow
                into a substantial sum over time? This is the magic of
                compounding, and starting a Systematic Investment Plan (SIP) can
                harness this power to build your wealth.
              </p>
              <p className="mt-6">
                Let's take an example to illustrate this. Imagine you start
                investing ₹2,000 every month in a mutual fund that offers a 12%
                annual return (CAGR). Over 10 years, your total investment would
                be ₹2,40,000. But, thanks to compounding, your investment grows
                significantly more. Here's how it works:
              </p>
              <ul className="mt-6 list-disc pl-5 space-y-3">
                <li>
                  Each month, you invest ₹2,000. This regular investment is
                  called a Systematic Investment Plan (SIP).
                </li>
                <li>Over a year, you invest ₹24,000 (₹2,000 x 12 months).</li>
                <li>
                  With a 12% annual return, your investments grow not just by
                  earning interest on your principal but also by earning
                  interest on the interest that accrues over time, which is the
                  essence of compounding.
                </li>
                <li>
                  The formula to calculate the future value of a series of
                  monthly investments is:
                  <br />
                  <code>
                    Future Value = P * [ (1 + r/n)^(nt) - 1 ] * (1 + r/n) /
                    (r/n)
                  </code>
                  <br />
                  where:
                  <ul className="list-disc pl-5">
                    <li>
                      <code>P</code> = monthly investment (₹2,000)
                    </li>
                    <li>
                      <code>r</code> = annual interest rate (12% or 0.12)
                    </li>
                    <li>
                      <code>n</code> = number of times interest is compounded
                      per year (12 for monthly)
                    </li>
                    <li>
                      <code>t</code> = number of years the money is invested
                      (10)
                    </li>
                  </ul>
                </li>
                <li>
                  Plugging in the values:
                  <br />
                  <code>
                    Future Value = 2000 * [ (1 + 0.12/12)^(12*10) - 1 ] * (1 +
                    0.12/12) / (0.12/12)
                  </code>
                </li>
                <li>
                  Calculating step-by-step:
                  <ul className="list-disc pl-5">
                    <li>
                      <code>Monthly interest rate = 0.12 / 12 = 0.01</code>
                    </li>
                    <li>
                      <code>Number of monthly investments = 12 * 10 = 120</code>
                    </li>
                    <li>
                      <code>
                        Future Value = 2000 * [ (1 + 0.01)^120 - 1 ] * (1 +
                        0.01) / 0.01
                      </code>
                    </li>
                    <li>
                      <code>
                        Future Value = 2000 * [ (1.01)^120 - 1 ] * 1.01 / 0.01
                      </code>
                    </li>
                    <li>
                      <code>
                        Future Value = 2000 * [ 3.30039 - 1 ] * 1.01 / 0.01
                      </code>
                    </li>
                    <li>
                      <code>Future Value = 2000 * 2.30039 * 1.01 / 0.01</code>
                    </li>
                    <li>
                      <code>
                        Future Value = 2000 * 2.30039 * 101 = 4,65,878.79
                      </code>
                    </li>
                  </ul>
                </li>
                <li>
                  So, your total investment over 10 years is ₹2,40,000 (₹2,000
                  per month * 120 months). But thanks to compounding at a 12%
                  annual return, your investment grows to approximately
                  ₹4,65,879.
                </li>
              </ul>

              <p className="mt-6">
                This example shows the power of compounding, where your money
                grows exponentially over time. By starting a SIP with ₹2,000 per
                month and earning a 12% annual return, you can significantly
                increase your wealth over a decade.
              </p>
              <img
                className="w-full mt-6 rounded-xl bg-gray-100 shadow-lg ring-1 ring-gray-400/10"
                src={compoundImage} alt="Compounding Example"
              />
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Start Early.
                    </strong>{" "}
                    The earlier you start, the more you benefit from
                    compounding. Even small amounts grow significantly over
                    time.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Consistency is Key.
                    </strong>{" "}
                    Regular, disciplined investments are crucial. Stick to your
                    SIP plan and watch your wealth grow.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Reap the Rewards.
                    </strong>{" "}
                    Over time, the power of compounding can turn your small
                    investments into a substantial corpus, securing your
                    financial future.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Whether you're saving for a house, your child's education, or
                retirement, starting an SIP can help you achieve your financial
                goals. The key is to start now and be consistent. Happy
                investing!
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Ready to Start Your SIP?
              </h2>
              <p className="mt-6">
                Beginning your investment journey with an SIP is easy and
                convenient. Many financial institutions offer flexible SIP
                options tailored to your needs. Take the first step today and
                leverage the power of compounding to build a brighter financial
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
