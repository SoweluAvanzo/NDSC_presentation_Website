import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-gradient-to-b from-[#050713] via-[#0a0f1e] to-[#0f1629]">
            <div className="pt-24 sm:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F7FF] sm:text-5xl md:text-6xl">Contact Us</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-[#C3C8E5]">
                            Let's discuss how we can help you build the future of decentralized systems.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] p-8 sm:p-12 rounded-2xl shadow-lg border border-[#18C5FF]/20">
                            <div className="space-y-10">
                                <h3 className="text-3xl font-bold text-[#F5F7FF] text-center">Our Information</h3>
                                <div className="flex items-start">
                                    <Mail className="w-8 h-8 text-[#18C5FF] mt-1 flex-shrink-0" />
                                    <div className="ml-6">
                                        <h4 className="text-xl font-semibold text-[#F5F7FF]">Email</h4>
                                        <p className="text-[#C3C8E5] mt-1">Reach out for inquiries and consultations.</p>
                                        <div className="space-y-2 mt-3">
                                            <div>
                                                <span className="text-base text-[#A5AAC9] font-medium">CEO:</span>
                                                <a href="mailto:alex.norta@nortadesyco.xyz" className="ml-2 text-[#18C5FF] font-medium hover:underline text-base">alex.norta@nortadesyco.xyz</a>
                                            </div>
                                            <div>
                                                <span className="text-base text-[#A5AAC9] font-medium">CTO:</span>
                                                <a href="mailto:sowelu.avanzo@nortadesyco.xyz" className="ml-2 text-[#18C5FF] font-medium hover:underline text-base">sowelu.avanzo@nortadesyco.xyz</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-[#18C5FF]/20"></div>
                                <div className="flex items-start">
                                    <Linkedin className="w-8 h-8 text-[#18C5FF] mt-1 flex-shrink-0" />
                                    <div className="ml-6">
                                        <h4 className="text-xl font-semibold text-[#F5F7FF]">LinkedIn</h4>
                                        <p className="text-[#C3C8E5] mt-1">Connect with us professionally.</p>
                                        <a href="https://www.linkedin.com/company/norta-desyco/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[#18C5FF] font-medium hover:underline text-base mt-2 inline-block">Visit our LinkedIn page</a>
                                    </div>
                                </div>
                                <div className="border-t border-[#18C5FF]/20"></div>
                                <div className="flex items-start">
                                    <MapPin className="w-8 h-8 text-[#18C5FF] mt-1 flex-shrink-0" />
                                    <div className="ml-6">
                                        <h4 className="text-xl font-semibold text-[#F5F7FF]">Locations</h4>
                                        <div className="space-y-4 mt-3">
                                            <div>
                                                <p className="text-[#C3C8E5] text-base font-medium">Norta DeSyCo OÜ</p>
                                                <p className="text-[#C3C8E5] text-base">Tallinn, Estonia</p>
                                            </div>
                                            <div>
                                                <p className="text-[#C3C8E5] text-base font-medium">Norta DeSyCo Limited</p>
                                                <p className="text-[#C3C8E5] text-base">Jazeera - Al Riffa</p>
                                                <p className="text-[#C3C8E5] text-base">Ras Al Khaimah, United Arab Emirates</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}