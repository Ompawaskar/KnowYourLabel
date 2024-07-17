import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight , ArrowLeft } from 'lucide-react';

function Allergies({ setQuestionIndex }) {
    const allergens = [
        { name: "Peanuts" },
        { name: "Tree Nuts" },
        { name: "Milk" },
        { name: "Eggs" },
        { name: "Wheat" },
        { name: "Soy" },
        { name: "Fish" },
        { name: "Sesame Seeds" },
        { name: "Mustard" }
    ];

    const [allergies, setAllergies] = useState(allergens);
    const [clickedAllergies, setClickedAllergies] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAllergy = input.trim();
        if (newAllergy && !allergies.some(allergy => allergy.name.toLowerCase() === newAllergy.toLowerCase())) {
            setAllergies([...allergies, { name: newAllergy }]);
            setClickedAllergies([...clickedAllergies, newAllergy]);
            setInput(""); 
        }
    };

    const handleClick = (allergyName) => {
        if (clickedAllergies.includes(allergyName)) {
            setClickedAllergies(clickedAllergies.filter(a => a !== allergyName));
        } else {
            setClickedAllergies([...clickedAllergies, allergyName]);
        }
    };

    const handleNextPage = () => {
        setQuestionIndex(prev => prev + 1);
    };
    const handlePrevPage = () => {
        setQuestionIndex(prev => prev - 1);
    };

    return (
        <motion.div
            className='w-full h-full mt-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='mb-8 flex justify-start w-full ml-4'>
                <Button className = "bg-white px-4 hover:bg-white hover:scale-105" onClick={handlePrevPage}>
                    <ArrowLeft color='black'/>
                </Button>
            </div>
            <div className='mb-8 font-semibold text-4xl'>
                <h1 className='mb-2'>Select Your Allergies</h1>
                <h2 className='text-lg text-muted-foreground'>Help us identify the foods you should avoid to ensure a safe and enjoyable experience.</h2>
            </div>
            <form className='mb-8' onSubmit={handleSubmit}>
                <Input placeholder="Enter any allergy" value={input} onInput={(e) => setInput(e.target.value)} />
            </form>
            <div className='flex flex-wrap gap-4'>
                {allergies.map((allergy, index) => (
                    <button
                        key={index}
                        className={`rounded-3xl px-4 py-2 border border-1 border-yellow-300 shadow-lg ${clickedAllergies.includes(allergy.name) ? 'bg-yellow-400' : ''}`}
                        onClick={() => handleClick(allergy.name)}
                    >
                        {allergy.name}
                    </button>
                ))}
            </div>
            <div className='mt-24'>
            <Button className="bg-white text-black shadow-lg hover:border hover:bg-white hover:border-yellow-300" onClick = {handleNextPage}>
                Continue <ArrowRight className='ml-2 text-black hover:text-yellow-300' />
            </Button>
            </div>
        </motion.div>
    );
}

export default Allergies;
