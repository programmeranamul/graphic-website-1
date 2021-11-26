import Image from "next/image"
import style from "./../../styles/Blog.module.css"
import Link from "next/link"

/**
 * This is blog card component
 * Image from cover image, Image import from next/img
 * After image show description
 */

function BlogCard({description}) {
    return (
        <div className={`col-md-6 p-3 d-md-flex ${style.blog_card_wrapper} `}>
                <article className={`${style.blog_card } cursor-pointer`}>
                  <div className="bg-white pb-80 ">
                  <div className={style.image_container}>
                    <Image src="/blogImg.jpg" alt="blog image" width="100%" height="100%" className={style.image} layout='responsive' />
                  </div>
                  <div className={` px-3`}>
                  <h2 className="title-4 pt-3 ">Ditching the Darkroom: Old Editing Techniques and What We Do Now Instead</h2>
                  <p className={`mb-1 ${style.articel_meta}`}>by <span>Alexandra Sheehan</span> on <span>September 28, 2021</span></p>
                  <p className={style.article_text}>{description}</p>
                  <div className={style.action}>
                    <Link href="/articel">
                    <a>Read More</a>
                    </Link>
                  </div>
                  <div className={style.footer}>
                    <span>#Commercial Photography</span>
                  </div>
                  </div>
                  </div>
                </article>              
              </div>
    )
}

export default BlogCard
