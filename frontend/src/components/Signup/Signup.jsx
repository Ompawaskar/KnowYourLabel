import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Intro from './Questions/Intro';
import Gender from './Questions/Gender';
import Allergies from './Questions/Allergies';
import Disease from './Questions/Disease';
import { Progress } from "@/components/ui/progress";
import SignupForm from './Questions/SignupForm';

function Signup() {
    const [questionIndex, setQuestionIndex] = useState(0);
    
    return (
        <>
            <div>
                <Progress value={(questionIndex / 4) * 100} className="w-full h-2" />
            </div>
            <div className='w-full h-screen'>
                <AnimatePresence mode='wait'>
                    {questionIndex === 0 && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex justify-center items-center w-full h-full'
                        >
                            <Intro setQuestionIndex={setQuestionIndex} />
                        </motion.div>
                    )}
                    {questionIndex === 1 && (
                        <motion.div
                            key="gender"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex justify-center items-center w-full h-full'
                        >
                            <Gender setQuestionIndex={setQuestionIndex} />
                        </motion.div>
                    )}
                    {questionIndex === 2 && (
                        <motion.div
                            key="allergies"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex justify-center items-center w-full h-full'
                        >
                            <Allergies setQuestionIndex={setQuestionIndex} />
                        </motion.div>
                    )}
                    {questionIndex === 3 && (
                        <motion.div
                            key="disease"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex justify-center items-center w-full h-full'
                        >
                            <Disease setQuestionIndex={setQuestionIndex} />
                        </motion.div>
                    )}
                    {questionIndex === 4 && (
                        <motion.div
                            key="disease"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex justify-center items-center w-full h-full'
                        >
                            <SignupForm setQuestionIndex={setQuestionIndex} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Signup;
