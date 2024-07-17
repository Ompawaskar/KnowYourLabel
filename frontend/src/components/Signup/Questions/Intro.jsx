import { Button } from '@/components/ui/button'
import React from 'react'

function Intro({ setQuestionIndex }) {

    const handleClick = () => {
        setQuestionIndex(prev => prev + 1);
    }
    
    return (
        <div className=' w-full h-full flex flex-col justify-center items-center'>
            <div className='text-center'>
                <h1 className='mb-2 text-4xl font-bold'>🍔 Oh, hello there!</h1>
                <h1 className=' text-muted-foreground'>Let's get to know your taste buds better!</h1>
                <p className='mt-2 text-lg text-muted-foreground'>🤔 Are you ready to discover if that snack is a hero or a villain?</p>
            </div>

            <div className='flex justify-center items-center mt-8'>
                <Button onClick= {handleClick}>Continue</Button>
            </div>
        </div>
    )
}

export default Intro
