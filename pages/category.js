import Router from 'next/router'
import Head from '../components/helpers/head'

const Category = () => {
    return (
        <div>
            <Head title="Home">

            </Head>
            Kateoriga
        </div>
    )
}

Category.getInitialProps = ({ query }) => {
    console.log(query)
    return query
}

export default Category