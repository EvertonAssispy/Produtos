import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({Count, handlePageChange}) {
    
    
                        
    return (
        <Stack spacing={2} sx={{ alignItems: 'center', marginTop: 2 }}>
            <Pagination onChange={handlePageChange} count={Count} shape="rounded" siblingCount={0}
             boundaryCount={1}/>
        </Stack>
    );
}
