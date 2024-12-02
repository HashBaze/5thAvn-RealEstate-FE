'use client';;

import ViewProperty from '@/app/components/viewProperty';
import { useSearchParams } from 'next/navigation';

const page = ({ params }) => {
    const searchParams = useSearchParams();
    const type = params.type; 
    let id = searchParams.get('property'); 
    id = id.split('-').pop();
    return (
        <div>
            <ViewProperty type={type} id={id} />
        </div>
    );
};

export default page;
