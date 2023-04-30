import React, { useState, useEffect } from 'react';
import Sidebar from "../Sidebar/Sidebar"
import NavBar from '../NavBar/Navbar';
import personal from "../../images/personal-pp.JPG"
import selfPP from "../../images/personal-pp.JPG"
import movingArrow from "../../images/moving-arrow.gif"
import logoAvatar from "../../images/Logo-avatar.png"
function COntact() {


    return (
        <>
            <main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <div class="flex items-start justify-between"><div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <div class="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                        <br />
                        <br />

                        <section class="h-screen bg-gray-100/50">
                            <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
                                <div class="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
                                    <div class="max-w-sm mx-auto md:w-full md:mx-0">
                                        <div class="inline-flex items-center space-x-4">
                                            <a href="#" class="relative block">
                                                <img alt="profil" src={logoAvatar} class="mx-auto object-cover rounded-full h-16 w-16 " />
                                            </a>
                                            <h1 class="text-gray-600">
                                                Reach out to me !!
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-6 bg-white">
                                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                        <h2 class="max-w-sm mx-auto md:w-1/3">
                                            Basic Account Details
                                        </h2>
                                        <div class="max-w-sm mx-auto md:w-2/3">
                                            <div class="relative">
                                                <input type="text" id="email_id" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-base-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label for="email_id" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                        <h2 class="max-w-sm mx-auto md:w-1/3">
                                            Master Info
                                        </h2>
                                        <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                                            <div>
                                            <div class="relative">
                                                <input type="text" id="name" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-base-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your name</label>
                                            </div>
                                            </div>
                                            <div>
                                            <div class="relative">
                                                <input type="text" id="phone_number" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-base-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label for="phone_number" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter phone number (Optional)l</label>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                        <h2 class="max-w-sm mx-auto md:w-1/3">
                                            Message
                                        </h2>
                                        <div class="max-w-sm mx-auto md:w-2/3">
                                        <div class="relative">
                                                <input type="textarea" id="message" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-base-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label for="message" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Leave a message for me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                        <button type="button" class="py-2 px-4  bg-green-600 hover:bg-blue-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>



                    </div>
                </div>
                </div>
            </main>


        </>
    );
}

export default COntact;