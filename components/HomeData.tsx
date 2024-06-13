import Image from "next/image";
import styles from "./page.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetadata = ():PostMetadata[]=>{
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((files)=>files.endsWith(".md"));
  // const slugs = markdownPosts.map((file)=>file.replace(".md", ""));
  // return slugs;
  const posts = markdownPosts.map((fileName)=>{
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date:matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug:fileName.replace(".md", ""),
    };
  })
  return posts;

}


export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post)=>(
    <div>
      <Link href = {`/posts/${post.slug}`}>
       <h2>{post.title}</h2>
      </Link>
      
    </div>
  ))

  return <div>{postPreviews}</div>;
    
  
}


