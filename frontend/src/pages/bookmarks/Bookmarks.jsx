import React from 'react'
import Posts from '../../components/common/Posts';
import { useQuery } from '@tanstack/react-query';

function Bookmarks() {
    const isLoading = false;
    const feedType = "saved";
    const {data:authUser} = useQuery({queryKey:["authUser"]})
  return (
    <>

			<div className='flex-[4_4_0] border-l border-r border-gray-700 min-h-screen'>
				<div className='flex justify-between items-center p-4 border-b border-gray-700'>
					<p className='font-bold'>Bookmarks</p>
				</div>
				{isLoading && (
					<div className='flex justify-center h-full items-center'>
						<LoadingSpinner size='lg' />
					</div>
				)}
                <Posts feedType={feedType} userId={authUser._id}/>
			</div>
		</>
  )
}

export default Bookmarks