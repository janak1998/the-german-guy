'use client';
import React, { useState } from "react";

const GradeConversion = () => {
    const [maxGrade, setMaxGrade] = useState("");
    const [minPassingGrade, setMinPassingGrade] = useState("");
    const [currentGrade, setCurrentGrade] = useState("");
    const [convertedGrade, setConvertedGrade] = useState(null);

    const handleConversion = () => {
        if (!maxGrade || !minPassingGrade || !currentGrade) {
            alert("Please fill in all fields.");
            return;
        }

        const max = parseFloat(maxGrade);
        const min = parseFloat(minPassingGrade);
        const current = parseFloat(currentGrade);

        if (min >= max || current > max || current < min) {
            alert("Please enter valid grades.");
            return;
        }

        const result = 1 + (3 * (max - current)) / (max - min);
        setConvertedGrade(result.toFixed(1));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition duration-300 p-6 px-4 py-10">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-semibold mb-4">
                    Grade Conversion using the Bavarian Formula

                </h1>
                <p className="mb-6">This grade conversion formula, together with your degree program’s Academic and Examination Regulations (FPSO), is a tool to help your convert grades earned in countries other than Germany. Please note that this tool is only intended to provide a first orientation and the results are <b>in no way binding</b>.
                </p>
                <p className="mb-6">Converted grades are calculated using the “modified Bavarian formula”, as stipulated by the <a href="https://www.kmk.org/fileadmin/Dateien/pdf/ZAB/Hochschulzugang_Beschluesse_der_KMK/GesNot05.pdf" target="_blank" rel="noreferrer" className="underline">resolution of the Kultusministerkonferenz ↗</a> (German PDF, 0,1MB) </p>

                <h2 className="text-2xl font-semibold mb-4">Grade Conversion Tool
                </h2>

                <p>Enter the maximum grade, the minimum passing grade, and your current overall grade in the grading system of your university. The result is the equivalent to your grade in the German grading system, where 1.0 is the maximum grade and 4.0 the minimum passing grade.</p>

                <br/>

                <p><b>Please note:</b> Internationally, grading systems used at institutions of higher educations may differ substantially. The result given here is non-binding, as this grade converter can only provide a general first estimation.</p>

                <br/>

                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium">
                            Maximum Grade at Your University
                        </label>
                        <input
                            type="number"
                            value={maxGrade}
                            onChange={(e) => setMaxGrade(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Minimum Passing Grade at Your University
                        </label>
                        <input
                            type="number"
                            value={minPassingGrade}
                            onChange={(e) => setMinPassingGrade(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Your current overall grade at your university

                        </label>
                        <input
                            type="number"
                            value={currentGrade}
                            onChange={(e) => setCurrentGrade(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={handleConversion}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4 transition"
                    >
                        Convert
                    </button>

                    <div>
                        <label className="block mb-2 font-medium">
                        Your grade in the German system
                        </label>
                        <div className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700">
                            {convertedGrade !== null ? convertedGrade : "---"}
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default GradeConversion;