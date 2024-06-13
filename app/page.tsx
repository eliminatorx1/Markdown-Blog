import Image from "next/image";
import styles from "./page.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import PostPreview from "../components/PostPreview";

import Link from "next/link";
import { PostMetadata } from "@/components/PostMetadata";

import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";


export default function HomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post)=>(
    <PostPreview key = {post.slug}{...post}/>


  ))

  // return <div>{postPreviews}</div>;
    
  
}


