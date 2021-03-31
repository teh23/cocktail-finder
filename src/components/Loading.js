import React from 'react'

const Loading = () => {
    return (
        <div>
            <progress
                className="mt-5 mb-5 progress is-small is-primary"
                max="100"
            />
        </div>
    )
}

export default Loading
