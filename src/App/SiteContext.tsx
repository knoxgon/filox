import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 10em;
    padding: 0 2em;

`;

const SiteContext = (props: any) => {
    return (
        <Container >{props.children}</Container>
    )
}

export default SiteContext