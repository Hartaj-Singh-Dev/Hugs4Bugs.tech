import React from "react";
import fs from "fs";
import matter from "gray-matter";
import BlogPost from "../components/BlogPost";
import { GetStaticProps  , NextPage} from "next";
import {motion} from "framer-motion"

interface ArticleMeta {
    title?: string;
    metaTitle?:string;
    date?: string;
    ReadTime?: string
    metaDesc?: string;
    socialImage?: string;
    tags?: Array<string>;
}
interface PostDataTypes {
  slug: string;
  frontmatter?: ArticleMeta[];
}



interface Iprops {
	posts:  ArticleMeta[]
}


const Blog: NextPage<Iprops | any> = ({ posts }) => {
  
  return (
    <>
      


  <motion.main transition={{ type: 'linear' }} initial={{ opacity: 0, x: -200, y: 0 }} animate={{opacity: 1, x: 0, y: 0}} exit={{ opacity: 0, x: 0, y: -100 }}>
    <section className="min-h-screen bg-[#191a27] flex flex-col items-center justify-end ">
        <div className="w-full text-center mt-28">
          <h1 className="font-['Ubuntu'] text-extrabold text-5xl text-white">
            Blogs
          </h1>
        </div>

        <div className="w-full px-2 flex flex-col justify-evenly items-center">
          {posts.map((post: PostDataTypes, index:number) => {
		  console.log(post)
           return <BlogPost key={index} slug={post.slug}  article={post.frontmatter} />
	})}
	 

        </div>
      </section> 
   </motion.main> 
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync("Posts");

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(`Posts/${filename}`, "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { posts },
  };
};

export default Blog;
