import Router from 'next/router'
import Head from '../components/head'

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
    
    return query
}

export default Category