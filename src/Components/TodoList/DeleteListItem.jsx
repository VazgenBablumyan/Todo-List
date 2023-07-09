import React from 'react'

export default function DeleteListItem({todos}) {
    const handleClick = (todo) => {
        
    }
  return (
    <div>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
    </div>
  )
}
