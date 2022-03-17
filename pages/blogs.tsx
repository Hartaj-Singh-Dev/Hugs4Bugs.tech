import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import Script from "next/script";
import BlogPost from "../components/BlogPost";
import { GetStaticProps } from "next";

interface PostDataTypes {
  slug: string;
  frontmatter: object;
}

const Blog = ({ posts }: Array) => {
  console.log(posts);
  return (
    <>
      {/* <Script src="https://utteranc.es/client.js"/> */}
      <section className="h-screen bg-[#191a27] flex flex-col items-center justify-end ">
        <div className="w-full text-center">
          <h1 className="font-['Inter'] text-extrabold text-3xl text-white">
            Blogs
          </h1>
        </div>

        <div className="w-full px-2 flex flex-col justify-evenly items-center">
          {/* {props.Posts.map((item:PostDataTypes)=>{
			// <BlogPost key={item.slug} slug={item.slug} Data={item.frontmatter}/>
		 	
		
		})} */}
          {posts.map((post, index) => {
            <BlogPost key={index} slug={post.slug} Data={post.frontmatter} />;
          })}
        </div>

        <div className="utterances" style={{ height: "100rem", width: "100%" }}>
          <iframe
            className="utterances-frame"
            title="Comments"
            scrolling="no"
            src="https://utteranc.es/utterances.html?src=https%3A%2F%2Futteranc.es%2Fclient.js&repo=Hartaj-Singh-Dev%2FHugs4Bugs.tech&issue-term=pathname&label=Comment&theme=github-dark&crossorigin=anonymous&async=&url=http%3A%2F%2Flocalhost%3A3000%2Fblogs&origin=http%3A%2F%2Flocalhost%3A3000&pathname=blogs&title=&description=&og%3Atitle=&session="
            loading="lazy"
          ></iframe>
        </div>
      </section>
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
function posts(posts: any) {
  throw new Error("Function not implemented.");
}
