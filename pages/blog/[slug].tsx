import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {marked} from "marked"
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';

export const getStaticPaths: GetStaticPaths = async (context) =>{

	const files = fs.readdirSync("Posts")
	return{
		paths:files.map(filename => { 
			return {
				params:{
					slug: filename.replace(".md" , "")
				}
			} 
		}),
		fallback:false,
	}
}
interface ArticleMeta {
    title?: string;
    metaTitle?:string;
    date?: string;
    ReadTime?: string
    metaDesc?: string;
    socialImage?: string;
    tags?: Array<string>;
}

interface postPageProps {
	frontmatter: ArticleMeta
	content: string
}

const PostPage:NextPage<postPageProps>  = ({frontmatter , content}) => {
  return (
	 <>
	 <section className='w-full mt-20 flex flex-col justify-center items-center'>
		 <article className=" w-5/6 max-w-5/6 sm:w-1/2">
			 <h1 className="text-white font-['Ubuntu'] text-3xl sm:text-6xl md:text-8xl font-extrabold">{frontmatter.title}</h1> 
			  <div className="prose mt-10 font-['Inconsolata'] font-light opacity-80 text-lg leading-8 text-white" dangerouslySetInnerHTML={{ __html : marked(content)}}></div>
		 </article>

               <section className='w-full justify-items-center items-center'>
                 <div className="utterances" style={{height:"50%"}}>
                   <iframe className="utterances-frame" style={{height:"100%"}} title="Comments" scrolling="no" src="https://utteranc.es/utterances.html?src=https%3A%2F%2Futteranc.es%2Fclient.js&amp;repo=Hartaj-Singh-Dev%2FHugs4Bugs.tech&amp;issue-term=pathname&amp;label=Comment&amp;theme=github-dark&amp;crossorigin=anonymous&amp;async=&amp;url=http%3A%2F%2Flocalhost%3A3000%2Fblogs&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;pathname=blogs&amp;title=&amp;description=&amp;og%3Atitle=&amp;session=b7a2763f6d127ba3918f15a3TAJphyCwUVwl%2BrbBDtSmaTxBUVYei%2Bwdz1d8Hwd5ur%2Bvd73EsjQzKG82iQE2vTYNJQE9blb7RU%2FaKVK8IrkB6js1fgF63v6%2F5U64x9QaLk%2FPsmDw8U6XacF1t%2F4%3D" loading="lazy"></iframe>
                 </div>
	      </section>
	 </section>
	

	 </>
  )
}
          

export const getStaticProps: GetStaticProps = async (context) =>{
	const slug: string = context.params?.slug as string
	const filename = fs.readFileSync(`Posts/${slug}.md` ,'utf-8')
	const {data: frontmatter , content} = matter(filename)
	return{
		props:{ frontmatter , content}
	}
}




export default PostPage;