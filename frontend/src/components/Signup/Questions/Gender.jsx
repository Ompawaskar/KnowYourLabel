import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeftIcon } from 'lucide-react';


function Gender({ setQuestionIndex }) {

    const handleAvatarClick = () => {
        setQuestionIndex(prev => prev + 1);
    };
    const handlePrevPage = () => {
        setQuestionIndex(prev => prev - 1);
    };

    return (
        <motion.div
            className=' w-full h-full flex flex-col justify-center items-center'>
            <div className='mb-8 flex justify-start w-full ml-4'>
                <Button className = "bg-white px-4 hover:bg-white hover:scale-105" onClick={handlePrevPage}>
                    <ArrowLeft color='black'/>
                </Button>
            </div>

            <div className='mb-8 font-bold text-4xl  w-full'>
                <h1>Choose Your Avatar</h1>
                <h2 className='text-xl text-muted-foreground'>Are you a dapper dude or a fierce femme</h2>
            </div>
            <div className='flex justify-center items-center gap-32 mx-16'>
                <div className='w-1/2 flex justify-end items-center'>
                    <Avatar className='w-1/2 h-1/2 cursor-pointer hover:scale-105 hover:ease-out'
                        onClick={handleAvatarClick}>
                        <AvatarImage src="/male_avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className='w-1/2 flex justify-start items-center'>
                    <Avatar className='w-1/2 h-1/2 cursor-pointer hover:scale-105 hover:ease-out'
                        onClick={handleAvatarClick}>
                        <AvatarImage src="/female_avatar.avif" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </motion.div>
    )
}

export default Gender
