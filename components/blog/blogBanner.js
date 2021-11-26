import style from "./../../styles/Blog.module.css"

function BlogBanner() {
    return (
        <div className={style.blog_banner}>
            <div className="container">
                <h1 className="col-md-9 col-11 mx-auto">Ecommerce and Product Photography Tips</h1>
            </div>
        </div>
    )
}

export default BlogBanner
