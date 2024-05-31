'use client'

import { useParams } from 'next/navigation'

const ContentDetailWorkshop = () => {
  const params = useParams<{ detail: string }>()
  console.log(params)

  return (
    <section className="" id='workshops' style={{ paddingLeft: '25%' }}>
      {
        params?.detail === 'title0' ? (
          <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
            <h1 className='text-3xl font-semibold text-gray-800'>Module</h1>
            <p className='mt-4'>
              Clone Repository:
            </p>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
            </p>
          </div>

        ) : params?.detail === 'title1' ? (
          <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
            <h1 className='text-3xl font-semibold text-gray-800'>Module</h1>
            <p className='mt-4'>
              Move code is organized into Modules. Each module roughly corresponds to a single smart contract on other blockchains. Move, however, offers a lot more functionalities that make organizing code into smaller and more modular pieces easier. Each module offers an API through its entry and public functions. Users can interact with the modules by calling functions from these modules via transactions or via other Move code. Transactions are sent to and processed by the Sui blockchain and once executed, the resulting changes will be saved. This tech stack resembles the Web 2 stack where Move modules act as the server with different routes/APIs, the Sui blockchain acting as the framework to run the server and provides the database for storing data. Developers can then build a UI that connects to this server and database to provide rich functionalities to their users.
            </p>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
            </p>
          </div>
        ) : params?.detail === 'title2' ? (
          <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
            <h1 className='text-3xl font-semibold text-gray-800'>Structs</h1>
            <p className='mt-4'>
              Data on the Sui blockchain can be organized into structs. Structs can be thought of as a group of related fields, each with its own type such as numbers, booleans, and vectors. Struct is a foundational concept in Sui Move.
            </p>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
            </p>
          </div>
        ) : params?.detail === 'title3' ? (
          <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
            <h1 className='text-3xl font-semibold text-gray-800'>Sui Objects</h1>
            <p className='mt-4'>
              A fundamental concept in Sui we first need to explore is objects. In Sui, all data is represented as fields inside distinct objects. This models real life where everything around us is an object - chair, table, light, etc. People go through life interacting with objects, looking at them to understand their characteristics, interacting with them and modifying their states.

              On the Sui blockchain, modules create, read, interact with, and modify objects as part of their flows. As users send transactions to call different functions on the blockchain, the functions they call might need to read data from multiple objects that the users own, and modify them to reflect the results of the user interactions. Object is a core fundamental building block in Sui Move and the core of any application. When building one, the first thing developers should think about is what the application data looks like and which objects need to be created to store them.
            </p>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
            </p>
          </div>
        ) : params?.detail === 'title4' ? (
          <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
            <h1 className='text-3xl font-semibold text-gray-800'>Lorem ipsum dolor sit amet</h1>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
            </p>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus, nec ultricies sapien orci sit amet nunc. Nulla facilisi
            </p>
          </div>
        ) : (
          <div className='max-w-screen-md py-8 text-gray-600 md:px-8'>
            <h1 className='text-3xl font-semibold text-gray-800'>Page Not Found</h1>
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
