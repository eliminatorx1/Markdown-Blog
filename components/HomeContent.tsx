import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { PostMetadata } from "@/components/PostMetadata";

// Function to get post metadata and content of the latest post
const getLatestPostContent = (): PostMetadata => {
  const folder = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => file.endsWith(".md"));

  // Sort files by modification time, latest first
  const sortedPosts = markdownPosts.sort((a, b) => {
    const aStat = fs.statSync(path.join(folder, a));
    const bStat = fs.statSync(path.join(folder, b));
    return bStat.mtime.getTime() - aStat.mtime.getTime();
  });

  // Get the latest post
  const latestFile = sortedPosts[0];
  const fileContents = fs.readFileSync(path.join(folder, latestFile), "utf-8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    subtitle: data.subtitle,
    slug: latestFile.replace(".md", ""),
    content,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const latestPost = getLatestPostContent();
  return {
    props: {
      latestPost,
    },
  };
};

interface HomeProps {
  latestPost: PostMetadata;
}

const HomeContent = ({ latestPost }: HomeProps) => {
  return (
    <div className={styles.container}>
      <h1 >{latestPost.title}</h1>
      <p>{latestPost.date}</p>
      <div>{latestPost.content}</div>
      <Link href={`/posts/${latestPost.slug}`}>
        <button className="px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-800 duration-300 w-full active:bg-transparent">
          <span className="py-2 w-full active:bg-neutral-700 focus:bg-neutral-700">
            Read More
          </span>
        </button>
      </Link>
    </div>
  );
};

export default HomeContent;
