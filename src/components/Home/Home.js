import React, { useState, useEffect } from 'react';
import Sidebar from "../Sidebar/Sidebar"
import NavBar from '../NavBar/Navbar';
import personal from "../../images/personal-pp.JPG"

function Home() {


    return (
        <>
            <main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <div class="flex items-start justify-between"><div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <div class="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                        {/* 3 Items in 1 coloumn */}
                        <div class="flex flex-col flex-wrap sm:flex-row ">
                            <div class="w-full sm:w-1/2 xl:w-1/3">
                                <div class="mb-4">
                                    <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                        <div class="flex items-center justify-between mb-6">
                                            <div class="flex items-center">
                                                <div class="flex flex-col">
                                                    <span class="ml-2 font-bold text-black text-md dark:text-white">
                                                        EDUCATION
                                                    </span>
                                                    <span class="ml-2 text-sm text-gray-500 dark:text-white">
                                                        Schooling and University
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
                                                PATHA BHAVAN KOLKATA
                                            </span>
                                            <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                SECONDARY
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between mb-4 space-x-12">
                                            <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                PHSPS, JODHPUR PARK
                                            </span>
                                            <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                HIGHER-SECONDARY
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between mb-4 space-x-12">
                                            <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                AMITY UNIVERSITY KOLKATA
                                            </span>
                                            <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                GRADUATION
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div class="w-full sm:w-1/2 xl:w-1/3">
                                <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
                                    <div class="mb-4">
                                        <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <div class="flex items-center justify-between mb-6">
                                                <div class="flex items-center">
                                                    <div class="flex flex-col">
                                                        <span class="ml-2 font-bold text-black text-md dark:text-white">
                                                            TRAININGS & INTERNSHIPS
                                                        </span>
                                                        <span class="ml-2 text-sm text-gray-500 dark:text-white">
                                                            (Includes Certifications))
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
                                                    WEB DEVELOPMENT
                                                </span>
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    CERTIFIED
                                                </span>
                                            </div>
                                            <div class="flex items-center justify-between mb-4 space-x-12">
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                    ELECTRONICS ENGINEERING
                                                </span>
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    CERTIFIED
                                                </span>
                                            </div>
                                            <div class="flex items-center justify-between mb-4 space-x-12">
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                    NETWORKING AND SECURITY
                                                </span>
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    CERTIFIED
                                                </span>
                                            </div>
                                            <div class="flex items-center justify-between mb-4 space-x-12">
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                    GOOGLE DIIGITAL UNLOCKED
                                                </span>
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    CERTIFIED
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div class="w-full sm:w-1/2 xl:w-1/3">
                                <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
                                    <div class="mb-4">
                                        <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <div class="flex items-center justify-between mb-6">
                                                <div class="flex items-center">
                                                    <div class="flex flex-col">
                                                        <span class="ml-2 font-bold text-black text-md dark:text-white">
                                                            UPSKILLING COURSES
                                                        </span>
                                                        <span class="ml-2 text-sm text-gray-500 dark:text-white">
                                                            Non Certified and Certified
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
                                                    JAVA DEVELOPMENT BOOTCAMP
                                                </span>
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    CERTIFIED
                                                </span>
                                            </div>
                                            <div class="flex items-center justify-between mb-4 space-x-12">
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                    FULL STACK WEB DEVELOPMENT
                                                </span>
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    UPSKILL
                                                </span>
                                            </div>
                                            <div class="flex items-center justify-between mb-4 space-x-12">
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                    SPRINGBOOT AND DATA JPA
                                                </span>
                                                <span class="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    UPSKILL
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        {/* Window Mock */}
                        <div className="mockup-window border bg-green-600">
                            <div className="flex justify-center px-4 py-16 border-t bg-base-100">

                                {/* <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
                                    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                                            Website Design
                                        </h3>
                                        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
                                            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
                                        </p>
                                    </div>
                                    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                                            Branding
                                        </h3>
                                        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
                                            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
                                        </p>
                                    </div>
                                    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                                            SEO Marketing
                                        </h3>
                                        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
                                            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
                                        </p>
                                    </div>
                                </div> */}
                                <div className="stats shadow">

                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        </div>
                                        <div className="stat-title">Years of Experience</div>
                                        <div className="stat-value text-primary">7+ Months</div>
                                        <div className="stat-desc"></div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div className="stat-title">Webpages Created</div>
                                        <div className="stat-value text-secondary">50+</div>
                                        <div className="stat-desc">Created more than 50+ webpages</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <div className="avatar online">
                                                <div className="w-16 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stat-value">Skilled in</div>
                                        <div className="stat-title">React JS</div>
                                        <div className="stat-desc text-secondary"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                </div>
            </main>


        </>
    );
}

export default Home;