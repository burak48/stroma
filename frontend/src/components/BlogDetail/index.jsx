import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react' // eslint-disable-line
import axios from 'axios'

function BlogDetail() {
    const {id} = useParams() // get the ID from the URL
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        axios
            .get(`http://localhost:3001/blog/${id}`)
            .then((res) => {
                setBlog(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    if (!blog) {
        return <div>Loading...</div>
    }

    return (
        <div css={customStyles}>
            <section className="blog-detail">
                <div className="blog-button-wrapper">
                    <button className="blog-detail-edit" onClick={() => {}}>
                        Edit
                    </button>
                    <button className="blog-detail-edit blog-delete" onClick={() => {}}>
                        Delete
                    </button>
                </div>
                <div className="blog-title-wrapper">
                    <h1>{blog.title}</h1>
                    <div className="image-wrapper">
                        <img src={blog.image} alt="detail" className="blog-detail-image" />
                    </div>
                </div>
                <p>{blog.content}</p>
            </section>
        </div>
    )
}

const customStyles = css`
    .blog-detail {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    .blog-detail h1 {
        font-size: 32px;
        font-weight: bold;
        margin: 0px 0px 10px;
    }

    .blog-detail p {
        margin: 10px 0;
        font-size: 18px;
    }

    .blog-detail p:first-of-type {
        margin-top: 0;
    }
    .blog-detail-edit {
        color: #fff;
        cursor: pointer;
        background: #050a30;
        border: none;
        border-radius: 4px;
        padding: 10px;
    }
    .blog-title-wrapper {
        margin: 25px 0px;
    }
    .blog-button-wrapper {
        display: flex;
        justify-content: end;
    }
    .blog-delete {
        margin-left: 10px;
    }
    .image-wrapper {
        height: 300px;
    }
    .blog-detail-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default BlogDetail
