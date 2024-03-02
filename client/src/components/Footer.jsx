import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function FooterCom() {
    return (
        <Footer container className='border border-teal-500 border-t-8'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex  md:grid-cols-1">
                    <div className="mb-3">
                        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl dark:text-white font-semibold'>
                            <span className='px-2 py-1 bg-red-600 rounded-lg text-white'>Blogging</span>Spot
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col >
                                <Footer.Link
                                    href='https://github/pavan77749'
                                    target='_blank'
                                    rel='noopener noreferer'
                                    className='text-blue-500'>
                                    About Me
                                </Footer.Link>
                                <Footer.Link
                                    href='https://github/pavan77749'
                                    target='_blank'
                                    rel='noopener noreferer'
                                    className='text-blue-500'
                                >
                                    Pavan Blog
                                </Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://github/pavan77749'
                                    target='_blank'
                                    rel='noopener noreferer'
                                    className='text-blue-500'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link
                                    href='https://github/pavan77749'
                                    target='_blank'
                                    rel='noopener noreferer' className='text-blue-500'
                                >
                                    Linkedin
                                </Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#' className='text-blue-500'
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href='#' className='text-blue-500'
                                >
                                    Teams &amp; Conditions
                                </Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href='#' by="Pavan's Blog" year={new Date().getFullYear()} />
                    <div className=" flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='#' icon={BsLinkedin} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
