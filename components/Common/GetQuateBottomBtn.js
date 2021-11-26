import Link from "next/link"

/**
 * This component from Quote button
 * Quote button always show in bottom on website
 * 
 */

function GetQuateBottomBtn() {
    return (
        <>
        <section className="d-none d-md-block">
        <Link href="/quote"><a className="new-quote">Get your quote</a></Link>
      </section>
      <section className="d-block d-md-none">
        <Link href="/quote"><a className="new-quote">Get quote</a></Link>
      </section>
        </>
    )
}

export default GetQuateBottomBtn
