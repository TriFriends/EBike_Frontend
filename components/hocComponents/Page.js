import React from 'react'

const Page = ({ PageComponent, Head }) => {
    class Page extends React.Component {

        state = {
            refs: {
                computerSearch: React.createRef(),
                main: React.createRef()
            }
        }



        render() {
            return (
                <React.Fragment>
                    <Head />
                    <PageComponent />
                </React.Fragment>

            )
        }

    }
    return Page
}

export default Page