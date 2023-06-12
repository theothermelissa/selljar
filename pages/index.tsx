import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome home.</h1>
      <p>This will be the dashboard. Links:</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/fundraisers">Fundraisers</Link>
        </li>
        <li>
          {" "}
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          {" "}
          <Link href="/drafts">Drafts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
