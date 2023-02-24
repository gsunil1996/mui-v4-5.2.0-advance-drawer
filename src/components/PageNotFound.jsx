import React from 'react'

const PageNotFound = () => {
    const token = localStorage.getItem('type');

    return token ? (<div>PageNotFound</div>) : (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-80px" }} >
            <div>PageNotFound</div>
        </div>
    )
}

export default PageNotFound