import Article from "./Article";

const ArticleList = ({posts}) => 
{
    console.log(posts)

    let postsProp=posts.map(
    (post)=>
    {
        return <Article key={post.id} date={post.date} title={post.title} preview={post.preview}/>
    })
    return ( 
        <>
            <main>
                {postsProp}
            </main>
        </>
     );
}
 
export default ArticleList;