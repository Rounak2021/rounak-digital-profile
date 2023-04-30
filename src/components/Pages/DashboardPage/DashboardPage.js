import React, { useState, useEffect } from 'react';
import Sidebar from "../Sidebar/Sidebar"
import NavBar from '../NavBar/Navbar';
const DashboardPageTile1=()=>{


    return (
        <>
        <div class="mb-4">
                                <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div class="flex items-center justify-between mb-6">
                                        <div class="flex items-center">
                                            <div class="flex flex-col">
                                                <span class="ml-2 font-bold text-black text-md dark:text-white">
                                                    Google
                                                </span>
                                                <span class="ml-2 text-sm text-gray-500 dark:text-white">
                                                    Google Inc.
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <button class="p-1 border border-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button class="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between mb-4 space-x-12">
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                            PROGRESS
                                        </span>
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                            HIGH PRIORITY
                                        </span>
                                    </div>
                                    <div class="block m-auto">
                                        <div>
                                            <span class="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span class="font-bold text-gray-700 dark:text-white">
                                                    25
                                                </span>
                                                /50
                                            </span>
                                        </div>
                                        <div class="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                            <div class="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-start my-4 space-x-4">
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                            IOS APP
                                        </span>
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                            UI/UX
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/1.jpg" alt="Guy"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/2.jpeg" alt="Max"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/3.jpg" alt="Charles"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/4.jpg" alt="Jade"/>
                                        </a>
                                    </div>
                                    <span class="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                        DUE DATE : 18 JUN
                                    </span>
                                </div>
                            </div>

        </>
    );
}

const DashboardPageTile2=()=>{


    return (
        <>
        <div class="mb-4">
                                <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div class="flex items-center justify-between mb-6">
                                        <div class="flex items-center">
                                            <div class="flex flex-col">
                                                <span class="ml-2 font-bold text-black text-md dark:text-white">
                                                    Google
                                                </span>
                                                <span class="ml-2 text-sm text-gray-500 dark:text-white">
                                                    Google Inc.
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <button class="p-1 border border-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button class="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between mb-4 space-x-12">
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                            PROGRESS
                                        </span>
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                            HIGH PRIORITY
                                        </span>
                                    </div>
                                    <div class="block m-auto">
                                        <div>
                                            <span class="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span class="font-bold text-gray-700 dark:text-white">
                                                    25
                                                </span>
                                                /50
                                            </span>
                                        </div>
                                        <div class="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                            <div class="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-start my-4 space-x-4">
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                            IOS APP
                                        </span>
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                            UI/UX
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/1.jpg" alt="Guy"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/2.jpeg" alt="Max"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/3.jpg" alt="Charles"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/4.jpg" alt="Jade"/>
                                        </a>
                                    </div>
                                    <span class="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                        DUE DATE : 18 JUN
                                    </span>
                                </div>
                            </div>

        </>
    );
}

const DashboardPageTile3=()=>{


    return (
        <>
        <div class="mb-4">
                                <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div class="flex items-center justify-between mb-6">
                                        <div class="flex items-center">
                                            <div class="flex flex-col">
                                                <span class="ml-2 font-bold text-black text-md dark:text-white">
                                                    Google
                                                </span>
                                                <span class="ml-2 text-sm text-gray-500 dark:text-white">
                                                    Google Inc.
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <button class="p-1 border border-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button class="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between mb-4 space-x-12">
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                            PROGRESS
                                        </span>
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                            HIGH PRIORITY
                                        </span>
                                    </div>
                                    <div class="block m-auto">
                                        <div>
                                            <span class="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span class="font-bold text-gray-700 dark:text-white">
                                                    25
                                                </span>
                                                /50
                                            </span>
                                        </div>
                                        <div class="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                            <div class="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-start my-4 space-x-4">
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                            IOS APP
                                        </span>
                                        <span class="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                            UI/UX
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/1.jpg" alt="Guy"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/2.jpeg" alt="Max"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/3.jpg" alt="Charles"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/4.jpg" alt="Jade"/>
                                        </a>
                                    </div>
                                    <span class="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                        DUE DATE : 18 JUN
                                    </span>
                                </div>
                            </div>

        </>
    );
}

export  {DashboardPageTile1,DashboardPageTile2,DashboardPageTile3};