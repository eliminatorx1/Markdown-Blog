import { PostMetadata } from "./PostMetadata";

import Link from "next/link";
const PostPreview = (props:PostMetadata) =>{

   return ( <div >
      <Link style={{color: "grey"}} href = {`/posts/${props.slug}`}>
       <h2 >{props.title}</h2>
      </Link>
      
    </div>)

}

export default PostPreview;