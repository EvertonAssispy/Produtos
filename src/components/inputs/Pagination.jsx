import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({Count, handlePageChange}) {
    
    const infoPerPage = 4
    const TotalPages = Math.ceil(Count / infoPerPage)
                                    14
    return (
        <Stack spacing={2} sx={{ alignItems: 'center', marginTop: 2 }}>
            <Pagination onChange={handlePageChange} count={TotalPages} shape="rounded" siblingCount={0}
             boundaryCount={1}/>
        </Stack>
    );
}
