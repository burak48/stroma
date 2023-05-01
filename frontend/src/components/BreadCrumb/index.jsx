/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react' // eslint-disable-line
import {Link, useLocation} from 'react-router-dom'

function BreadCrumbs() {
    const location = useLocation()
    const paths = location.pathname.split('/').filter((path) => path !== '')

    return (
        <div css={customStyles}>
            <section>
                <ul>
                    {paths.map((path, index) => {
                        const link = `/${paths.slice(0, index + 1).join('/')}`
                        const text = path.replace(/^\w/, (c) => c.toUpperCase())
                        const isLast = index === paths.length - 1

                        return (
                            <li key={path}>
                                {link == '/blog' ? (
                                    <Link to="/home">{text}</Link>
                                ) : (
                                    <Link to={link}>{text}</Link>
                                )}
                                {!isLast && ' > '}
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

const customStyles = css`
    ul {
        list-style: none;
        padding: 10px 0px;
        margin-left: 0px;
        margin-right: 0px;
    }
    li {
        display: inline;
    }

    li a {
        text-decoration: none;
    }
`

export default BreadCrumbs
