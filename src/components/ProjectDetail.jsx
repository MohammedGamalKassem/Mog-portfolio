import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = PROJECTS[id];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl mb-4">Project Not Found</h2>
                    <Link to="/" className="text-blue-400 hover:text-blue-300">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-red-600 selection:text-yellow-400'>
            {/* Aerospace-themed background */}
            <div className='fixed top-0 -z-10 h-full w-full'>
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-black">
                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                    {/* Red glow effect */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    {/* Blue accent */}
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                    {/* Yellow accent */}
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
            </div>

            <div className="container mx-auto px-8 py-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500/10"
                    >
                        <FaArrowLeft /> Back to Portfolio
                    </Link>
                </motion.div>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                >
                    <div className="border-l-4 border-red-600 pl-6 mb-6">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent mb-4">
                            {project.title}
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-yellow-400"></div>
                    </div>
                </motion.div>

                {/* Project Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        {/* Project Image */}
                        <div className="mb-8 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-96 object-cover rounded-lg border-2 border-red-900/50"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/800x400/1a1a1a/ef4444?text=Project+Image';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-6 mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                                <div className="w-1 h-6 bg-red-600"></div>
                                Project Overview
                            </h2>
                            <p className="text-neutral-300 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-blue-900/30 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                                <div className="w-1 h-6 bg-blue-600"></div>
                                Technologies & Tools
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                        className="px-4 py-2 bg-gradient-to-r from-red-900/30 to-blue-900/30 border border-red-600/50 rounded-lg text-yellow-300 font-medium hover:from-red-900/50 hover:to-blue-900/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* View Project Button */}
                        <div className="bg-gradient-to-br from-red-900/30 via-black to-blue-900/30 border-2 border-red-600/50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Project Files</h3>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
                            >
                                <FaExternalLinkAlt />
                                View Project Details
                            </a>
                        </div>

                        {/* Project Stats */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-yellow-900/30 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                                <div className="w-1 h-6 bg-yellow-500"></div>
                                Quick Info
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                                    <span className="text-neutral-400">Category</span>
                                    <span className="text-red-400 font-semibold">Aerospace Engineering</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                                    <span className="text-neutral-400">Technologies</span>
                                    <span className="text-blue-400 font-semibold">{project.technologies.length}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-neutral-400">Status</span>
                                    <span className="text-yellow-400 font-semibold">Completed</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation to other projects */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-blue-900/30 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Other Projects</h3>
                            <div className="space-y-2">
                                {PROJECTS.map((p, index) => (
                                    index !== parseInt(id) && (
                                        <Link
                                            key={index}
                                            to={`/project/${index}`}
                                            className="block p-3 bg-neutral-800/50 hover:bg-neutral-700/50 rounded border border-neutral-700 hover:border-red-600/50 transition-all"
                                        >
                                            <p className="text-sm text-neutral-300 hover:text-yellow-400 transition-colors line-clamp-1">
                                                {p.title}
                                            </p>
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
