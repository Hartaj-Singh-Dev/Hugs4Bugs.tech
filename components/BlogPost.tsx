import React from "react"
import Link from "next/link"
import { NextPage } from "next";


// interface ArticleMeta {
// 	title?:string;
// 	ReadTime?:string;
// 	date?:string;
// 	metaDesc?:string;
// 	socialImage?: string
// }

interface ArticleMeta {
    title?: string;
    metaTitle?:string;
    date?: string;
    ReadTime?: string
    metaDesc?: string;
    socialImage?: string;
    tags?: Array<string>;
}
interface IProps{
	article: ArticleMeta
	slug: string
}

const BlogPost: NextPage<IProps | any> = ({article , slug}) => {
	return(
		<>
	      <Link href={`/blog/${slug}`}>
             <div className="hover:scale-95  hover:shadow-2xl cursor-pointer w-5/6 bg-[#191a27] flex flex-col justify-evenly items-center  min-h-1/3  border-opacity-10 my-8 sm:w-3/4 md:h-[20rem] sm:max-h-1/6 md:flex-row  md:mt-20">
		<div className="w-full md:w-1/3  h-2/5 md:h-5/6">
			<img src={article.socialImage} alt="" loading="lazy" className="w-full h-full object-cover rounded-xl" />
		</div>
		<div className="w-full px-2 md:pl-5 h-3/5 flex flex-col justify-around items-start  md:h-full md:w-4/6 pt-7">
		  <h1 className="text-white font-['Poppins']  text-xl md:text-5xl md:hover:opacity-70">{article.title}</h1>
		  <div className="text-white opacity-75">Date: {article.date}</div>
		  <div className="text-white mt-3 mb-4 md:mb-1 md:mt-1 w-28 flex flex-row justify-center font-semibold items-center md:text-sm md:w-20 text-lg bg-[#337BD4] ">
			{article.ReadTime} 
			<p>&nbsp;Read</p>
		   </div>
		   <div className=" font-['Ubuntu'] md:py-2 hidden md:flex text-white opacity-75">
			   {article.metaDesc}
		   </div>
		</div>
		</div>
			
	      </Link> 
		</>
	)
}


export default BlogPost;