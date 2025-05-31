import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "school-outline",
      degree: 'Baccalaureate in Life and Earth Sciences',
      institution: 'Moulay Youssef High School',
      grades: 'Year: 2022',
      year: '[2021-2022]',
      desc: "I obtained my baccalaureate diploma in Life and Earth Sciences in 2022.",
    },
    {
      logo: "book-outline",
      degree: 'DEUG in Biology',
      institution: 'Faculty of Sciences - Hassan I University',
      grades: 'Duration: 2 years',
      year: '[2022-2024]',
      desc: "I studied for two years and earned a DEUG degree in Biology at Hassan I University.",
    },
    {
      logo: "school-outline",
      degree: 'Current Studies at Ahmed Al Hansali School',
      institution: 'Ahmed Al Hansali School',
      grades: 'Ongoing',
      year: '[2024-2025]',
      desc: "I am currently pursuing my studies at Ahmed Al Hansali School for the academic year 2024/2025.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
        My <span className="text-cyan-600">Education</span>
      </h3>
      <p className="text-lg text-center font-normal">Here is a summary of my academic journey.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
