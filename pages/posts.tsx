import prisma from "../lib/prisma";
import { GetStaticProps } from "next/types";
import Router from "next/router";
import React from "react";

type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

type Props = {
  feed: PostProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  console.log(">>>>>>>>>>>>>>>>>>  getting posts <<<<<<<<<<<<<<<<<<<<");
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

const submitNewPost = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  try {
    const body = { title: "Test title", content: "Test content" };
    await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((response) => {
      console.log("response: ", response);
    });
    await Router.push("/drafts");
  } catch (error) {
    console.error(error);
  }
};

const Posts: React.FC<Props> = (props) => {
  const { feed } = props;

  return (
    <div>
      <div>
        {props.feed.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={submitNewPost}>Create Post</button>
      </div>
    </div>
  );
};

export default Posts;
