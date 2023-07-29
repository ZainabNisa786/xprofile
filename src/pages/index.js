import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'
import useSWR from 'swr'

const Home = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  // get data from api
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
  if (error) return <>
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}>

    <header class="">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <Link class="block " href="/">
              <span class="sr-only">Home</span>
              <Image src="/x_large.jpg" alt="Logo" width={50} height={50} priority />
            </Link>
          </div>

          <div class="hidden sm:block">
            <form class="flex items-center w-80">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <input type="text" id="simple-search" class="border border-gray text-sm rounded-lg block w-full pl-3 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search user profile..." required></input>
              </div>
              <button type="submit" class="p-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none hover:bg-gray-600 focus:ring-gray-500">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex hidden sm:gap-4">
              <Link
                class="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
              >
                Contribute ⭐
              </Link>
            </div>
            <div class="block sm:hidden">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user profile..." required></input>
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="grid h-screen px-4 place-content-center">
      <div class="text-center">
        <h1 class="font-black text-gray-200 text-9xl">404</h1>

        <p class="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Uh-oh!
        </p>

        <p class="mt-4 text-gray-400">We can&apos;t find that page.</p>

        <Link
          href="https://github.com/hellofaizan/xprofile"
          class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Report Error
        </Link>
      </div>
    </div>

  </motion.div>
</>
  if (isLoading) return <div>loading...</div>

  if (data) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>

          <header class="">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div class="flex h-16 items-center justify-between">
                <div class="md:flex md:items-center md:gap-12">
                  <Link class="block " href="/">
                    <span class="sr-only">Home</span>
                    <Image src="/x_large.jpg" alt="Logo" width={50} height={50} priority />
                  </Link>
                </div>

                <div class="hidden sm:block">
                  <form class="flex items-center w-80">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                      <input type="text" id="simple-search" class="border border-gray text-sm rounded-lg block w-full pl-3 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search user profile..." required></input>
                    </div>
                    <button type="submit" class="p-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none hover:bg-gray-600 focus:ring-gray-500">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                      <span class="sr-only">Search</span>
                    </button>
                  </form>
                </div>

                <div class="flex items-center gap-4">
                  <div class="sm:flex hidden sm:gap-4">
                    <Link
                      class="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                      href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
                    >
                      Contribute ⭐
                    </Link>
                  </div>
                  <div class="block sm:hidden">
                    <form class="flex items-center">
                      <label for="simple-search" class="sr-only">Search</label>
                      <div class="relative w-full">
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user profile..." required></input>
                      </div>
                      <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </header>

        </motion.div>
      </>
    )
  }
  //TODO Need to Handle Cors Error

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>

        <header class="">
          <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="md:flex md:items-center md:gap-12">
                <Link class="block " href="/">
                  <span class="sr-only">Home</span>
                  <Image src="/x_large.jpg" alt="Logo" width={50} height={50} priority />
                </Link>
              </div>

              <div class="hidden sm:block">
                <form class="flex items-center w-80">
                  <label for="simple-search" class="sr-only">Search</label>
                  <div class="relative w-full">
                    <input type="text" id="simple-search" class="border border-gray text-sm rounded-lg block w-full pl-3 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search user profile..." required></input>
                  </div>
                  <button type="submit" class="p-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg focus:ring-4 focus:outline-none hover:bg-gray-600 focus:ring-gray-500">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </form>
              </div>

              <div class="flex items-center gap-4">
                <div class="sm:flex hidden sm:gap-4">
                  <Link
                    class="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                    href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
                  >
                    Contribute ⭐
                  </Link>
                </div>
                <div class="block sm:hidden">
                  <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                      <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user profile..." required></input>
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                      <span class="sr-only">Search</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="grid h-screen px-4 bg-white place-content-center">
          <div class="text-center">
            <h1 class="font-black text-gray-200 text-9xl">404</h1>

            <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </p>

            <p class="mt-4 text-gray-500">We can&apos;t find that page.</p>

            <a
              href="#"
              class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </a>
          </div>
        </div>

      </motion.div>
    </>
  )
}


export default Home