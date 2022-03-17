import React from "react"
import Link from "next/link"

interface Blogproptypes {
	slug: string;	
	Data: object
}

const BlogPost = (props:Blogproptypes) => {
	return(
		<>
	      <Link href={`/${props.slug}`}>
             <div className="w-5/6 bg-[#11121A] h-96  rounded-xl">
		<div>
			<h1 className="text-white text-2xl">{props.slug}</h1>
		</div>
		<div>
		<p>{props.Data.title}</p>
		</div>
		</div>
			
	      </Link> 
		</>
	)
}


export default BlogPost;