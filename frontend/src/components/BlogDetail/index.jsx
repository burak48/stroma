/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react' // eslint-disable-line
import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-modal'
import BreadCrumbs from '../BreadCrumb'

function BlogDetail() {
    const {id} = useParams() // get the ID from the URL
    const [blog, setBlog] = useState(null)
    const navigate = useNavigate()
    const [showEditModal, setShowEditModal] = useState(false)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/blog/${id}`)
            .then((res) => {
                setBlog(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const handleEditModalOpen = () => {
        setShowEditModal(true)
    }

    const handleEditModalClose = () => {
        setShowEditModal(false)
    }

    const handleEditBlog = (event) => {
        setBlog({
            ...blog,
            [event.target.name]: event.target.value,
        })
    }

    const handleSaveBlog = () => {
        axios
            .put(`${process.env.REACT_APP_API_URL}/blog/${id}`, {...blog})
            .then((response) => {
                console.log('response: ', response)
                setShowEditModal(false)
            })
            .catch((error) => {
                console.error(error)
            })

        handleEditModalClose()

        // Navigate to the updated blog's detail page
        navigate(`/blog/${blog.id}`)
    }

    function handleCloseBlog() {
        setShowEditModal(false)
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/blog/${blog.id}`)
            navigate('/home')
        } catch (error) {
            console.error(error)
        }
    }

    if (!blog) {
        return <div>Loading...</div>
    }

    return (
        <div css={customStyles}>
            <section className="blog-detail">
                <div className="blog-button-wrapper">
                    <button className="blog-detail-edit" onClick={handleEditModalOpen}>
                        Edit
                    </button>
                    <button className="blog-detail-edit blog-delete" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                <div className="blog-title-wrapper">
                    <BreadCrumbs />
                    <h1>{blog.title}</h1>
                    <div className="image-wrapper">
                        <img src={blog.image} alt="detail" className="blog-detail-image" />
                    </div>
                </div>
                <p>{blog.content}</p>
            </section>
            <Modal
                isOpen={showEditModal}
                onRequestClose={handleEditModalClose}
                style={customModalStyle}
            >
                <h2>Edit Blog</h2>
                <form style={customModalFormStyle}>
                    <label style={customModalLabelStyle}>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={blog.title}
                        onChange={handleEditBlog}
                        style={customModalInputStyle}
                    />
                    <label style={customModalLabelStyle}>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={blog.author}
                        onChange={handleEditBlog}
                        style={customModalInputStyle}
                    />
                    <label style={customModalLabelStyle}>Content:</label>
                    <textarea
                        name="content"
                        value={blog.content}
                        onChange={handleEditBlog}
                        style={customModalInputStyle}
                    />
                </form>
                <button onClick={handleSaveBlog} style={customModalButtonStyle}>
                    Save
                </button>
                <button onClick={handleCloseBlog} style={customModalButtonStyle}>
                    Cancel
                </button>
            </Modal>
        </div>
    )
}

const customStyles = css`
    .breadcrumb-wrapper {
        display: flex;
        justify-content: space-between;
    }
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

export default BlogDetail
