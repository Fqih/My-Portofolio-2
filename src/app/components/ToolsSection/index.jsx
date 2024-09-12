"use client";
import Image from 'next/image';
import { useTheme } from '@/app/Theme';

const ToolsSection = () => {
  const { isDarkMode } = useTheme();

  const tools = [
    { src: '/images/NextJs.png', alt: 'Next.js', name: 'Next.js' },
    { src: '/images/React.png', alt: 'React', name: 'React' },
    { src: '/images/MongoDB.png', alt: 'MongoDB', name: 'MongoDB' },
    { src: '/images/GoLogo.png', alt: 'Go', name: 'Go' },
    { src: '/images/AwsLogo.png', alt: 'AWS', name: 'AWS' },
    { src: '/images/GoogleCloudLogo.png', alt: 'GCP', name: 'GCP' },
    { src: '/images/BootstrapLogo.png', alt: 'Bootstrap', name: 'Bootstrap' },
    { src: '/images/ExpressJsLogo.png', alt: 'Express', name: 'Express' },
    { src: '/images/JavaScriptLogo.png', alt: 'JavaScript', name: 'JavaScript' },
    { src: '/images/Python.png', alt: 'Python', name: 'Python' },
    { src: '/images/Flask.png', alt: 'Flask', name: 'Flask' },
    { src: '/images/R.png', alt: 'R', name: 'R' },
    { src: '/images/sklearn.png', alt: 'Scikit-Learn', name: 'Scikit-Learn' },
    { src: '/images/tailwind.png', alt: 'Tailwind CSS', name: 'Tailwind CSS' },
    { src: '/images/Tensorflow.png', alt: 'TensorFlow', name: 'TensorFlow' },
    { src: '/images/Typescript.png', alt: 'TypeScript', name: 'TypeScript' },
  ];

  return (
    <section className={`p-6 overflow-hidden ${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Tools I Use</h1>
        <div className="relative overflow-hidden">
          <div className="whitespace-nowrap flex animate-marquee">
            <div className="flex">
              {tools.map((tool) => (
                <div key={tool.name} className="inline-flex flex-col items-center mx-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-lg">{tool.name}</p>
                </div>
              ))}
            </div>
            <div className="flex">
              {tools.map((tool) => (
                <div key={tool.name + '-2'} className="inline-flex flex-col items-center mx-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-lg">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: 200%;
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;
