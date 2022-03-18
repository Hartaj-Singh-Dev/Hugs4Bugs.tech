import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {marked} from "marked"
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';

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
	const commentBox = React.createRef<any>()

	React.useEffect(()=>{
		const scriptEl = document.createElement("script");
		scriptEl.setAttribute("src","https://utteranc.es/client.js")
		scriptEl.setAttribute("crossorigin", "anonymous")
		//@ts-ignore
		scriptEl.setAttribute("async" , true)
		scriptEl.setAttribute("repo", "Hartaj-Singh-Dev/Hugs4Bugs.tech")
		scriptEl.setAttribute("issue-term" , "url")
		scriptEl.setAttribute("theme" , "github-dark")
		commentBox.current.appendChild(scriptEl)

	},[])

  return (
	 <>
	 <Head>
		 <title>{frontmatter.metaTitle}</title>
		 <meta name="description" content={frontmatter.metaDesc} />
		 //@ts-ignore
		 <meta name="Keywords" content={frontmatter.tags?.map((tag)=>{return tag as String}).toString()} />
	 </Head>
	 <section className='w-full mt-24 flex flex-col justify-center items-center'>
		 <article className=" w-5/6 max-w-5/6 sm:w-1/2">
			 <img src={frontmatter.socialImage} alt="" className="w-full object-cover h-40"/>
			 <h1 className="text-white font-['Ubuntu'] my-2 text-3xl sm:text-6xl md:text-8xl font-extrabold">{frontmatter.title}</h1> 
			  <h2 className='text-white opacity-80 text-md my-2' >{frontmatter.date}</h2>
			  <h2>{frontmatter.ReadTime}</h2>
			  <div className="prose mt-10 font-['Inconsolata'] font-light opacity-80 text-xl leading-8 text-white" dangerouslySetInnerHTML={{ __html : marked(content)}}></div>

		 </article>

 <div className='h-[1.5px] w-[85%] mt-10 sm:w-[80%] md:w-[65%] bg-white opacity-80'></div>
               <section className=' mt-7 w-[90%] sm:w-full justify-items-center items-center overflow-scroll' id='comment'>
                 {/* <div className="utterances relative mx-auto" style={{ width:"100%" , overflow:"scroll"}}>
                   <iframe className="utterances-frame" scrolling='no' title="Comments" src="https://utteranc.es/utterances.html?src=https%3A%2F%2Futteranc.es%2Fclient.js&amp;repo=Hartaj-Singh-Dev%2FHugs4Bugs.tech&amp;issue-term=pathname&amp;label=Comment&amp;theme=github-dark&amp;crossorigin=anonymous&amp;async=&amp;url=http%3A%2F%2Flocalhost%3A3000%2Fblogs&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;pathname=blogs&amp;title=&amp;description=&amp;og%3Atitle=&amp;session=b7a2763f6d127ba3918f15a3TAJphyCwUVwl%2BrbBDtSmaTxBUVYei%2Bwdz1d8Hwd5ur%2Bvd73EsjQzKG82iQE2vTYNJQE9blb7RU%2FaKVK8IrkB6js1fgF63v6%2F5U64x9QaLk%2FPsmDw8U6XacF1t%2F4%3D" loading="lazy"></iframe>
                 </div> */}
		 <div ref={commentBox}></div>
	      </section>
	      <div className='h-[1.5px] w-[85%] sm:w-[80%] md:w-[65%] bg-white opacity-80'></div>
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