import React from 'react'

const PageHome = ({ summary }) => (<pre>{JSON.stringify(summary, null, 2)}</pre>)

export default PageHome
