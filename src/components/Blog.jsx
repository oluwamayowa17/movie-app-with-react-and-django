import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import Banner from './Banner';
import { useEffect, useState } from 'react';

function Blog(){
    const [posts, setPosts] = useState([])
    async function getNews(){
        const response = await fetch('http://127.0.0.1:8000/api/posts/')
        const data = await response.json()
        setPosts(data);
        console.log(data);
    }
    useEffect(()=>{
        getNews()
    }, [])

    return(
        <>
        <Banner/>
        <div className='container blog'>
            <div className="row">

               { posts.map((post)=>{
                return <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src={post.image} className="img-fluid" alt="" />
                            <div className="card-body">
                                <h3>{post.title}</h3>

                                <div className='post-details text-light'>
                                    <span><FontAwesomeIcon icon={faUser}/> {post.author.username}</span>
                                    <span><FontAwesomeIcon icon={faCalendar}/> {post.created_at}</span>
                                </div>
                                <div className="card-text">
                                    <p>{post.text}</p>
                                </div>

                                <a href="#">read more <FontAwesomeIcon icon={faArrowRight}/></a>
                            </div>
                        </div>
                    </div>

               })
                }
            </div>
        </div>
        </>
    )
}

export default Blog;