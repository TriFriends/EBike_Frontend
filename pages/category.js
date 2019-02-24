const Category = () => (
    <div>
        Kateoriga
    </div>
)

Category.getInitialProps = ({ query }) => {
    console.log(query)
    return query
}

export default Category