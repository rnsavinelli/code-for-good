
import React from 'react'

export default function page_test() {
    return (
        <div>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    )
}
