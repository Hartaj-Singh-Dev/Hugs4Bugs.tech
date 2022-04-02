import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {marked} from "marked"
import Link from "next/link"
import {useRouter} from 'next/router';
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

	const {asPath} = useRouter();
	
	console.log(asPath)

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
	 <React.Fragment>
	 <Head>
		 <title>{frontmatter.title}</title>
		 <meta name="description" content={frontmatter.metaDesc} />
		 //@ts-ignore
		 <meta property="og:title" content={frontmatter.metaTitle} />
		<meta property="og:description" content={frontmatter.metaDesc} /> 
		<meta property="og:image"  content={`https://hugs4-bugs-tech.vercel.app${frontmatter.socialImage}`}/>
		<meta name="twitter:card" content="summary_large_image"/>	
		<meta name="twitter:url" content="https://hugs4-bugs-tech.vercel.app"/>
		<meta name="twitter:image" content={`https://hugs4-bugs-tech.vercel.app${frontmatter.socialImage}`} />
		<meta name="twitter:title" content={frontmatter.title}  />
		<meta name="twitter:description" content={frontmatter.metaDesc} />
		 <meta name="Keywords" content={frontmatter.tags?.map((tag)=>{return tag as String}).toString()} />
	 </Head>
	 <section className="w-full mt-24 flex justify-evenly ">
	 <Link href={"/blogs"}><h2 className="hidden md:block md:sticky md:top-40 md:left-8 cursor-pointer text-[#5790d6] font-bold mt-24 text-xl  underline underline-offset-0">&#60;- Get Back ../</h2></Link>  

		 <article className="w-full flex md:w-[70%] flex-col justify-items-center items-center md:items-start">
			 <div className='w-5/6 md:mt-10 sm:w-3/5 md:w-3/4'>
		        <img src={frontmatter.socialImage} loading="lazy" alt="" className="w-full object-cover h-60 md:h-96"/>
			 <h1 className="text-white font-['Ubuntu_Mono'] my-6  prose max-w-none text-4xl sm:text-6xl md:text-7xl  font-extrabold">{frontmatter.title}</h1> 
			  <h2 className='text-white opacity-80 text-md md:text-lg my-2' >Date:- {frontmatter.date}</h2>
			  <h2 className="text-white ">{frontmatter.ReadTime}</h2>
			  <div className="prose md:prose-xl prose-headings:text-white prose-stone max-w-none mt-10 font-['Cabin'] font-light opacity-80 text-xl leading-8 text-white" dangerouslySetInnerHTML={{ __html : marked(content)}}></div>

		 
		 	</div>		

		<div className="hover:brightness-90">
		<Link href={`https://twitter.com/intent/tweet?url=https://hugs4-bugs-tech.vercel.app${asPath}`}>
			 <i className="cursor-pointer fa-brands fa-twitter fa-2x text-[#1DA1F2]"></i>
		</Link>
		</div>	
   
            <div className='h-[1.5px] w-[85%] mt-10 sm:w-[80%] md:w-[75%] bg-white opacity-80'></div>
               <section className=' mt-7 py-8  w-[90%] md:w-full sm:w-full justify-items-center items-center md:items-start' id='comment'>
                 {/* <div className="utterances relative mx-auto" style={{ width:"100%" , overflow:"scroll"}}>
                   <iframe className="utterances-frame" scrolling='no' title="Comments" src="https://utteranc.es/utterances.html?src=https%3A%2F%2Futteranc.es%2Fclient.js&amp;repo=Hartaj-Singh-Dev%2FHugs4Bugs.tech&amp;issue-term=pathname&amp;label=Comment&amp;theme=github-dark&amp;crossorigin=anonymous&amp;async=&amp;url=http%3A%2F%2Flocalhost%3A3000%2Fblogs&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;pathname=blogs&amp;title=&amp;description=&amp;og%3Atitle=&amp;session=b7a2763f6d127ba3918f15a3TAJphyCwUVwl%2BrbBDtSmaTxBUVYei%2Bwdz1d8Hwd5ur%2Bvd73EsjQzKG82iQE2vTYNJQE9blb7RU%2FaKVK8IrkB6js1fgF63v6%2F5U64x9QaLk%2FPsmDw8U6XacF1t%2F4%3D" loading="lazy"></iframe>
                 </div> */}
		 <div ref={commentBox}  className="md:w-[75%]"></div>
	      </section>
	      <div className='h-[1.5px] w-[85%] sm:w-[80%] md:w-[75%] bg-white opacity-80'></div>
		 </article>

	 </section>
	

	 </React.Fragment>
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