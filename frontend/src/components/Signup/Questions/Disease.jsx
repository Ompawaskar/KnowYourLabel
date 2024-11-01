import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SignUpContext } from '@/context/SignUpContext';
import { ComboboxDemo } from '@/components/AutoComplete/ComboBox';
import { fetchDiseases } from '@/api/fetchDiseases';

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

    const { state, dispatch } = useContext(SignUpContext);
    const formattedStateDiseases = state.diseases.map(disease => ({ name: disease }));

    const combinedDiseases = [...diseasesData, ...formattedStateDiseases];
    const uniqueDiseases = Array.from(
        new Set(combinedDiseases.map(disease => disease.name))
    ).map(name => ({ name }));

    const [diseases, setDiseases] = useState(uniqueDiseases);
    const [clickedDiseases, setClickedDiseases] = useState(state.diseases);

    const handleSubmit = (value) => {
        const newDisease = value.trim();
        console.log(diseases);

        if (newDisease && !diseases.some(disease => disease.name.toLowerCase() === newDisease.toLowerCase())) {
            setDiseases([...diseases, { name: newDisease }]);
            setClickedDiseases([...clickedDiseases, newDisease]);
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
        dispatch({ type: "USER_INFO", payload: { "diseases": clickedDiseases } })
    };

    const handlePrevPage = () => {
        dispatch({ type: "USER_INFO", payload: { "diseases": clickedDiseases } })
        setQuestionIndex(prev => prev - 1);
    };


    return (
        <motion.div
            className='w-full h-full mt-16 overflow-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className='mb-8 flex justify-start w-full ml-4'>
                <Button className="bg-white px-4 hover:bg-white hover:scale-105" onClick={handlePrevPage}>
                    <ArrowLeft color='black' />
                </Button>
            </div>
            <div className='mb-8 font-semibold text-4xl text-center'>
                <h1 className='mb-2'>Select Your Diseases</h1>
                <h2 className='text-lg text-muted-foreground'>Help us identify the foods you should avoid to ensure a safe and enjoyable experience.</h2>
            </div>
            <form className='mb-8 mx-16 flex justify-center' onSubmit={handleSubmit}>

                <ComboboxDemo placeholder='Search Diseases' onValueChange={fetchDiseases} addValue={handleSubmit} />

            </form>
            <div className='flex flex-wrap gap-4 justify-center'>
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
            <div className='mt-12 flex justify-center items-center'>
                <Button className="bg-white text-black shadow-lg hover:border hover:bg-white hover:border-red-300" onClick={handleNextPage}>
                    Continue <ArrowRight className='ml-2 text-black hover:text-red-400' />
                </Button>
            </div>
        </motion.div>
    );
}

export default Disease;
