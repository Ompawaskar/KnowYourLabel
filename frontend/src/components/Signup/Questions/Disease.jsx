import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight , ArrowLeft } from 'lucide-react';

function Disease({ setQuestionIndex }) {
    const diseasesData = [
        { name: "Diabetes" },
        { name: "Hypertension" },
        { name: "Cardiovascular Diseases" },
        { name: "Respiratory Diseases" },
        { name: "Tuberculosis" },
        { name: "Hepatitis" },
        { name: "Malaria" },
        { name: "Dengue" },
        { name: "Typhoid" },
        { name: "Cancer" }
    ];

    const [diseases, setDiseases] = useState(diseasesData);
    const [clickedDiseases, setClickedDiseases] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDisease = input.trim();
        if (newDisease && !diseases.some(disease => disease.name.toLowerCase() === newDisease.toLowerCase())) {
            setDiseases([...diseases, { name: newDisease }]);
            setClickedDiseases([...clickedDiseases, newDisease]);
            setInput("");
        }
    };

    const handleClick = (diseaseName) => {
        if (clickedDiseases.includes(diseaseName)) {
            setClickedDiseases(clickedDiseases.filter(d => d !== diseaseName));
        } else {
            setClickedDiseases([...clickedDiseases, diseaseName]);
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
            transition={{ duration: 0.5 }}>
            <div className='mb-8 flex justify-start w-full ml-4'>
                <Button className="bg-white px-4 hover:bg-white hover:scale-105" onClick={handlePrevPage}>
                    <ArrowLeft color='black' />
                </Button>
            </div>
            <div className='mb-8 font-semibold text-4xl'>
                <h1 className='mb-2'>Select Your Diseases</h1>
                <h2 className='text-lg text-muted-foreground'>Help us identify the foods you should avoid to ensure a safe and enjoyable experience.</h2>
            </div>
            <form className='mb-8' onSubmit={handleSubmit}>
                <Input placeholder="Enter any disease" value={input} onInput={(e) => setInput(e.target.value)} />
            </form>
            <div className='flex flex-wrap gap-4'>
                {diseases.map((disease, index) => (
                    <button
                        key={index}
                        className={`rounded-3xl px-4 py-2 border border-1 border-red-300 shadow-lg ${clickedDiseases.includes(disease.name) ? 'bg-red-400' : ''}`}
                        onClick={() => handleClick(disease.name)}
                    >
                        {disease.name}
                    </button>
                ))}
            </div>
            <div className='mt-24'>
            <Button className="bg-white text-black shadow-lg hover:border hover:bg-white hover:border-red-300" onClick = {handleNextPage}>
                Continue <ArrowRight className='ml-2 text-black hover:text-red-400' />
            </Button>
            </div>
        </motion.div>
    );
}

export default Disease;
