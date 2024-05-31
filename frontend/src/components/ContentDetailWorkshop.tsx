'use client'

import { useParams } from 'next/navigation'

const ContentDetailWorkshop = () => {
    const params = useParams<{ detail: string }>()
    console.log(params)
    // params = detail : 'info2'

    return (
        <section className="" id='workshops' style={{ paddingLeft: '25%' }}>
            {
                params?.detail === 'title1' ? (
                    <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
                        <h1 className='text-3xl font-semibold text-gray-800'>Introduction to Rust</h1>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                    </div>
                ) : params?.detail === 'title2' ? (
                    <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
                        <h1 className='text-3xl font-semibold text-gray-800'>Installing and Setting up Rust</h1>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                    </div>
                ) : params?.detail === 'title3' ? (
                    <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
                        <h1 className='text-3xl font-semibold text-gray-800'>Introduction to Cargo</h1>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                    </div>
                ) : params?.detail === 'title4' ? (
                    <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
                        <h1 className='text-3xl font-semibold text-gray-800'>Installing and Configuring Cargo</h1>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                    </div>
                ) : (
                    <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
                        <h1 className='text-3xl font-semibold text-gray-800'>Workshop not found</h1>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
                        </p>
                    </div>
                )

            }
        </section>
    );
}

export default ContentDetailWorkshop;