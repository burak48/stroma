import {useState, useEffect} from 'react'
import axios from 'axios'
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react' // eslint-disable-line
import {useNavigate} from 'react-router-dom'

function BlogList() {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:3001/blogs')
            .then((res) => {
                setBlogs(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div css={customStyles}>
            <section className="blog-container">
                <h2>BlogList</h2>
                <div className="blog-wrapper">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-box">
                            <img
                                src={blog.image}
                                alt="image"
                                className="blog-image"
                                loading="lazy"
                            />
                            <h2>{blog.title}</h2>
                            <p className="blog-content">{blog.content}</p>
                            <button
                                className="blog-read-more"
                                onClick={() => navigate(`/blogs/${blog.id}`)}
                            >
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

const customStyles = css`
    .blog-container {
        width: 1440px;
        margin: 0 auto;
    }
    .blog-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .blog-box {
        flex-basis: 30%;
        padding: 10px;
    }
    .blog-image {
        width: 100%;
    }
    .blog-content {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .blog-read-more {
        color: #fff;
        cursor: pointer;
        background: #050a30;
        border: none;
        border-radius: 4px;
        padding: 10px;
    }
`

export default BlogList
