import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Link from './Link'



const LinkList = () => {
    const FEED_QUERY = gql`
        {
            feed {
                links {
                    id
                    url
                    description
                }
            }
        }
    `
    return (
        <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) {
                    console.log(error.message)
                    return <div>Error</div>
                }

                const linksToRender = data.feed.links

                return (
                    <div>
                        {linksToRender.map(link => <Link key={link.id} link={link} />)}
                    </div>
                    
                )
            }}
        </Query>
    )
}

export default LinkList