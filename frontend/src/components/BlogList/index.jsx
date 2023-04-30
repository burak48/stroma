import {useState, useEffect} from 'react'
import axios from 'axios'
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react' // eslint-disable-line
import {useNavigate} from 'react-router-dom'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function BlogList() {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newBlog, setNewBlog] = useState({title: '', author: '', content: ''})

    useEffect(() => {
        axios
            .get('http://localhost:3001/blogs')
            .then((res) => {
                setBlogs(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [blogs])

    function handleAddButtonClick() {
        setIsModalOpen(true)
    }

    function handleModalClose() {
        setIsModalOpen(false)
        setNewBlog({title: '', author: '', content: ''})
    }

    function handleNewBlogChange(event) {
        const {name, value} = event.target
        setNewBlog((prevNewBlog) => ({...prevNewBlog, [name]: value}))
    }

    function handleNewBlogSave() {
        axios
            .post('http://localhost:3001/blog', newBlog)
            .then((response) => {
                console.log('response: ', response)
                handleModalClose()
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div css={customStyles}>
            <section className="blog-container">
                <div className="blog-header-wrapper">
                    <h2>BlogList</h2>
                    <div className="blog-button-add-wrapper">
                        <button className="blog-read-more" onClick={handleAddButtonClick}>
                            Add
                        </button>
                    </div>
                </div>
                <div className="blog-wrapper">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-box">
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
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleModalClose}
                    style={customModalStyle}
                >
                    <h2>Add New Blog</h2>
                    <div>
                        <form style={customModalFormStyle}>
                            <label style={customModalLabelStyle}>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={newBlog.title}
                                    onChange={handleNewBlogChange}
                                    style={customModalInputStyle}
                                />
                            </label>
                            <label style={customModalLabelStyle}>
                                Author:
                                <input
                                    type="text"
                                    name="author"
                                    value={newBlog.author}
                                    onChange={handleNewBlogChange}
                                    style={customModalInputStyle}
                                />
                            </label>
                            <label style={customModalLabelStyle}>
                                Content:
                                <textarea
                                    name="content"
                                    value={newBlog.content}
                                    onChange={handleNewBlogChange}
                                    style={customModalInputStyle}
                                />
                            </label>
                        </form>
                        <button onClick={handleNewBlogSave} style={customModalButtonStyle}>
                            Save
                        </button>
                        <button onClick={handleModalClose} style={customModalButtonStyle}>
                            Cancel
                        </button>
                    </div>
                </Modal>
            </section>
        </div>
    )
}

const customStyles = css`
    .blog-container {
        width: auto;
        margin: 0 auto;
    }

    @media screen and (min-width: 1024px) {
        .blog-container {
            width: 1440px;
        }
    }

    .blog-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 1024px) {
        .blog-wrapper {
            flex-direction: row;
        }
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
    .blog-header-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
    }
    .blog-button-add-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }
`

const customModalStyle = {
    content: {
        width: 'auto',
        margin: '0 auto',
        height: 'fit-content',
    },
}

const customModalFormStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const customModalInputStyle = {
    width: '100%',
    display: 'block',
    padding: '10px 0px 10px 5px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '0.25rem',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
}

const customModalLabelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
}

const customModalButtonStyle = {
    width: 'fit-content',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    padding: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginRight: '10px',
}

export default BlogList
