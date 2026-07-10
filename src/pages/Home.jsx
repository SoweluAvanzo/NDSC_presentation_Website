
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Brain, BarChart, CheckCircle, PenTool, TestTube, TrendingUp, Users, Award, Globe, Shield, Network, Building2 } from 'lucide-react';
import ConsultationFormModal from '../components/ConsultationFormModal';

function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#050713] via-[#050b18] to-[#0a0f1e] pt-32 pb-20 overflow-hidden">
      {/* Background network effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(24, 197, 255, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#18C5FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `drift ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="text-[#18C5FF] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              DAO • DeFi • <span className="normal-case">DE</span>centralized <span className="normal-case">SY</span>stem <span className="normal-case">CO</span>nsulting
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F7FF] leading-tight max-w-xl">
              Engineering Trustworthy Decentralized Systems
            </h1>
            
            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-[#C3C8E5] leading-relaxed max-w-xl">
              Empowering developers and communities with strategic and technical tools to build secure, transparent, and efficient decentralized governance infrastructures and financial systems.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#2563FF] hover:bg-[#1d4ed8] text-white rounded-md px-8 py-6 text-base font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200"
              >
                <Link to={createPageUrl('Contact')}>
                  Schedule a Consultation
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="bg-transparent border-[#555B7C] text-white hover:bg-[#555B7C]/20 rounded-md px-8 py-6 text-base font-semibold transition-all duration-200"
              >
                <Link to={createPageUrl('Services')}>
                  Explore Our Services
                </Link>
              </Button>
            </div>
            
            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#18C5FF]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#18C5FF]" />
                </div>
                <h3 className="text-[#F5F7FF] font-bold text-sm sm:text-base">Secure by Design</h3>
                <p className="text-[#A5AAC9] text-xs sm:text-sm leading-relaxed">
                  Model-driven engineering, formal verification, and proof-backed architectures.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#18C5FF]/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#18C5FF]" />
                </div>
                <h3 className="text-[#F5F7FF] font-bold text-sm sm:text-base">Governance You Can Trust</h3>
                <p className="text-[#A5AAC9] text-xs sm:text-sm leading-relaxed">
                  DAO and on-chain governance frameworks designed for accountability.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#18C5FF]/10 flex items-center justify-center">
                  <Network className="w-5 h-5 text-[#18C5FF]" />
                </div>
                <h3 className="text-[#F5F7FF] font-bold text-sm sm:text-base">DeFi Protocol Infrastructure</h3>
                <p className="text-[#A5AAC9] text-xs sm:text-sm leading-relaxed">
                  Protocol design, review, and risk assessment for decentralized finance.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-[#18C5FF]/25 rounded-full blur-3xl animate-pulse-slow" />
            </div>
            
            {/* Complex network visualization - 3D constellation style */}
            <div className="relative w-full max-w-lg aspect-square" style={{ transform: 'scale(1.15)', perspective: '1000px' }}>
              {/* Outer network layer */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  
                  {/* SVG for connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384" style={{ pointerEvents: 'none', zIndex: 1 }}>
                    <defs>
                      {/* Gradient definitions for lines */}
                      <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(24, 197, 255)', stopOpacity: 0.7 }} />
                        <stop offset="50%" style={{ stopColor: 'rgb(24, 197, 255)', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(24, 197, 255)', stopOpacity: 0.7 }} />
                      </linearGradient>
                      
                      {/* Gradient for star-to-cube connections */}
                      <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(24, 197, 255)', stopOpacity: 0.25 }}>
                          <animate attributeName="stop-opacity" values="0.25;0.45;0.25" dur="4s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" style={{ stopColor: 'rgb(24, 197, 255)', stopOpacity: 0.35 }}>
                          <animate attributeName="stop-opacity" values="0.35;0.55;0.35" dur="4s" repeatCount="indefinite" />
                        </stop>
                      </linearGradient>
                    </defs>
                    
                    {/* Constellation connections - stars to cubes (center is 192, 192) */}
                    <g style={{ opacity: 0.8 }}>
                      {/* Star at 0° (392, 192) connects to cubes at 0° (322, 192) and 45° (283.9, 100.1) */}
                      <line x1="392" y1="192" x2="322" y2="192" stroke="url(#constellationGradient)" strokeWidth="1" />
                      <line x1="392" y1="192" x2="283.9" y2="100.1" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 30° (365.2, 92) connects to cube at 45° (283.9, 100.1) */}
                      <line x1="365.2" y1="92" x2="283.9" y2="100.1" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 60° (292, 18.8) connects to cubes at 45° (283.9, 100.1) and 90° (192, 62) */}
                      <line x1="292" y1="18.8" x2="283.9" y2="100.1" stroke="url(#constellationGradient)" strokeWidth="1" />
                      <line x1="292" y1="18.8" x2="192" y2="62" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 90° (192, -8) connects to cube at 90° (192, 62) */}
                      <line x1="192" y1="-8" x2="192" y2="62" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 120° (92, 18.8) connects to cubes at 90° (192, 62) and 135° (100.1, 100.1) */}
                      <line x1="92" y1="18.8" x2="192" y2="62" stroke="url(#constellationGradient)" strokeWidth="1" />
                      <line x1="92" y1="18.8" x2="100.1" y2="100.1" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 150° (18.8, 92) connects to cube at 135° (100.1, 100.1) */}
                      <line x1="18.8" y1="92" x2="100.1" y2="100.1" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 180° (-8, 192) connects to cubes at 135° (100.1, 100.1) and 180° (62, 192) */}
                      <line x1="-8" y1="192" x2="62" y2="192" stroke="url(#constellationGradient)" strokeWidth="1" />
                      <line x1="-8" y1="192" x2="100.1" y2="100.1" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 210° (18.8, 292) connects to cube at 225° (100.1, 283.9) */}
                      <line x1="18.8" y1="292" x2="100.1" y2="283.9" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 240° (92, 365.2) connects to cubes at 225° (100.1, 283.9) and 270° (192, 322) */}
                      <line x1="92" y1="365.2" x2="100.1" y2="283.9" stroke="url(#constellationGradient)" strokeWidth="1" />
                      <line x1="92" y1="365.2" x2="192" y2="322" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 270° (192, 392) connects to cube at 270° (192, 322) */}
                      <line x1="192" y1="392" x2="192" y2="322" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 300° (292, 365.2) connects to cubes at 270° (192, 322) and 315° (283.9, 283.9) */}
                      <line x1="292" y1="365.2" x2="192" y2="322" stroke="url(#constellationGradient)" strokeWidth="1" />
                      <line x1="292" y1="365.2" x2="283.9" y2="283.9" stroke="url(#constellationGradient)" strokeWidth="1" />
                      
                      {/* Star at 330° (365.2, 292) connects to cube at 315° (283.9, 283.9) */}
                      <line x1="365.2" y1="292" x2="283.9" y2="283.9" stroke="url(#constellationGradient)" strokeWidth="1" />
                    </g>
                    
                    {/* Inner octagon connections - bright and sharp (on top) */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 45) * (Math.PI / 180);
                      const nextAngle = ((i + 1) * 45) * (Math.PI / 180);
                      const radius = 130;
                      const x1 = 192 + Math.cos(angle) * radius;
                      const y1 = 192 + Math.sin(angle) * radius;
                      const x2 = 192 + Math.cos(nextAngle) * radius;
                      const y2 = 192 + Math.sin(nextAngle) * radius;
                      
                      return (
                        <line
                          key={`inner-line-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="url(#lineGradient2)"
                          strokeWidth="2.5"
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Multiple interconnected nodes - outer ring as distant shiny stars */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * (Math.PI / 180);
                    const radius = 200;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-white"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                          filter: 'blur(0.3px)',
                          boxShadow: '0 0 10px 2px rgba(24, 197, 255, 0.8), 0 0 20px 4px rgba(24, 197, 255, 0.4)',
                          animation: `twinkleStar 3s ease-in-out infinite`,
                          animationDelay: `${i * 0.25}s`,
                          opacity: 0.7,
                          zIndex: 2
                        }}
                      />
                    );
                  })}
                  
                  {/* Inner governance layer - Perfect 3D cubes with all visible faces */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * (Math.PI / 180);
                    const radius = 130;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <div
                        key={`inner-${i}`}
                        className="absolute"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                          animation: `floatSync 5s ease-in-out infinite`,
                          animationDelay: `${i * 0.15}s`,
                          transformStyle: 'preserve-3d',
                          zIndex: 3
                        }}
                      >
                        {/* Perfect 3D Cube with all 6 faces */}
                        <div className="relative" style={{ width: '40px', height: '40px', transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(30deg)' }}>
                          {/* Front face */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] border-2 border-[#18C5FF] rounded-sm"
                               style={{ 
                                 transform: 'translateZ(20px)',
                                 boxShadow: '0 0 20px rgba(24, 197, 255, 0.6), inset 0 0 10px rgba(24, 197, 255, 0.3)'
                               }} />
                          {/* Back face */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] border-2 border-[#18C5FF]/40 rounded-sm"
                               style={{ 
                                 transform: 'translateZ(-20px) rotateY(180deg)',
                                 boxShadow: '0 0 10px rgba(24, 197, 255, 0.3)'
                               }} />
                          {/* Top face */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] border-2 border-[#18C5FF]/80 rounded-sm"
                               style={{ 
                                 transform: 'rotateX(90deg) translateZ(20px)',
                                 boxShadow: '0 0 15px rgba(24, 197, 255, 0.5)'
                               }} />
                          {/* Bottom face */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] border-2 border-[#18C5FF]/40 rounded-sm"
                               style={{ 
                                 transform: 'rotateX(-90deg) translateZ(20px)',
                                 boxShadow: '0 0 10px rgba(24, 197, 255, 0.3)'
                               }} />
                          {/* Right face */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] border-2 border-[#18C5FF]/70 rounded-sm"
                               style={{ 
                                 transform: 'rotateY(90deg) translateZ(20px)',
                                 boxShadow: '0 0 15px rgba(24, 197, 255, 0.4)'
                               }} />
                          {/* Left face */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] border-2 border-[#18C5FF]/60 rounded-sm"
                               style={{ 
                                 transform: 'rotateY(-90deg) translateZ(20px)',
                                 boxShadow: '0 0 12px rgba(24, 197, 255, 0.35)'
                               }} />
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Central DAO hub - much larger with intense glow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 4 }}>
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full border-4 border-[#18C5FF] bg-gradient-radial from-[#18C5FF]/30 via-[#18C5FF]/15 to-transparent backdrop-blur-sm shadow-[0_0_60px_rgba(24,197,255,0.6)] animate-pulse-slow" />
                      <div className="absolute inset-3 rounded-full border-3 border-[#18C5FF]/70 bg-gradient-radial from-[#2563FF]/40 to-[#2563FF]/20 shadow-[0_0_40px_rgba(37,99,255,0.5)]" />
                      <div className="absolute inset-8 rounded-full flex items-center justify-center bg-gradient-radial from-[#18C5FF]/20 to-transparent">
                        <Network className="w-20 h-20 text-[#18C5FF] drop-shadow-[0_0_20px_rgba(24,197,255,1)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes floatSync {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        @keyframes twinkleStar {
          0%, 100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -50px);
          }
          100% {
            transform: translate(0, -100px);
            opacity: 0;
          }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}

function ConsultingUnits() {
  const units = [
    {
      name: 'Trustworthy DAO Development Unit',
      icon: Brain,
      description: 'Specializing in the architectural design, formal verification, and implementation of robust and secure Decentralized Autonomous Organizations.',
      services: [
        'Model-Driven DAO Development',
        'Governance & Token Economy Design',
        'Automated Smart Contract Generation',
        'Formal Verification & Validation'
      ],
      link: createPageUrl('Services')
    },
    {
      name: 'Decentralized Finance Research Unit',
      icon: TrendingUp,
      description: 'Focused on creating and analyzing financial technologies for the DeFi ecosystem.',
      services: [
        'Crypto Market Analysis',
        'Algorithmic Trading Systems',
        'DeFi Risk Management Frameworks',
        'Predictive Analytics for Tokenomics'
      ],
      link: createPageUrl('Services')
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a0f1e] to-[#0f1629] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#F5F7FF] sm:text-4xl">
            Our Consulting Units
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-[#C3C8E5]">
            Two dedicated teams of specialists driving innovation in decentralized systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {units.map((unit) => (
            <Card key={unit.name} className="flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#18C5FF]/20 bg-gradient-to-br from-[#0a1628] to-[#0f1a2e]">
              <CardHeader className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-[#18C5FF]/10 rounded-lg">
                    <unit.icon className="w-8 h-8 text-[#18C5FF]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#F5F7FF]">{unit.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-[#C3C8E5] mb-6 leading-relaxed">{unit.description}</p>
                <ul className="space-y-3 mb-8">
                  {unit.services.map((service) => (
                    <li key={service} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#A5AAC9] font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="mt-auto pt-6 border-t border-[#18C5FF]/20">
                <Button asChild variant="outline" className="w-full bg-transparent border-[#555B7C] text-white hover:bg-[#555B7C]/20">
                  <Link to={unit.link}>
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComprehensiveSupport() {
  return (
    <div className="bg-gradient-to-b from-[#0f1629] to-[#131b35] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#F5F7FF] sm:text-4xl">
            End-to-End DAO and Token Launch Support
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-[#C3C8E5]">
            From initial concept to fully compliant deployment, we guide your entire DAO journey with comprehensive consulting and hands-on training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 shadow-xl bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] border-[#18C5FF]/20">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#18C5FF]/10 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-[#18C5FF]" />
                </div>
                <CardTitle className="tracking-tight text-2xl font-bold text-[#F5F7FF]">Complete DAO and Token Launch Consulting</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#C3C8E5] text-lg mb-6 leading-relaxed">
                We support companies and non-profit organizations in launching tokens and DAOs. Our comprehensive service covers every aspect from conceptual design to implementation and regulatory compliance, ensuring your project meets MiCA requirements and industry best practices.
              </p>
              <ul className="space-y-3">
                {[
                  'Token economy design and launch strategy modeling',
                  'MiCA compliance alignment & regulatory guidance',
                  'Complete governance architecture development',
                  'Post-launch monitoring & optimization services'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#A5AAC9] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-xl bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] border-[#18C5FF]/20">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#18C5FF]/10 rounded-lg">
                  <Brain className="w-8 h-8 text-[#18C5FF]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#F5F7FF]">Training & Workshops</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#C3C8E5] text-lg mb-6 leading-relaxed">
                Empower your team with cutting-edge knowledge. Our expert-led training programs cover a wide range of topics, from decentralized governance design and DAO development to Decentralized Finance systems, combining theoretical foundations with practical implementation.
              </p>
              <ul className="space-y-3">
                {[
                  'DAO design & deployment workshops',
                  'DeFi protocol development and integration training',
                  'Custom team training programs and consultations'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#A5AAC9] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function OurMethodology() {
  const methodologies = [
    {
      name: 'DAO Governance & Token Economy Design',
      icon: PenTool,
      description: 'DAO governance and token economy design and validation using DAO-ML and ET-DM modeling languages.',
      color: 'bg-[#18C5FF]'
    },
    {
      name: 'Tool Support Implementation',
      icon: CheckCircle,
      description: 'Implementation of DAOs, and DAO deployment platforms using specialized tool support for optimized code generation in a Low code and No-code fashion.',
      color: 'bg-[#2563FF]'
    },
    {
      name: 'Automated Testing Frameworks',
      icon: TestTube,
      description: 'Comprehensive test generation to validate the behavior and rules of your decentralized organization based on the specifications.',
      color: 'bg-[#3b82f6]'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#131b35] to-[#0a0f1e] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-[#18C5FF] font-semibold tracking-wide uppercase">Our Approach</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#F5F7FF] sm:text-4xl">
            A Research-Backed, Model-Driven Methodology
          </p>
          <p className="mt-4 max-w-4xl mx-auto text-xl text-[#C3C8E5]">
            We transform complex requirements into secure, production-ready systems by leveraging rigorous academic research results including dedicated tool-support, software engineering methods, languages and models tailored for DAOs and DApp development. Learn more about the software engineering method and DAO development case studies in the defended PhD thesis and publications (<a href="https://tesidottorato.depositolegale.it/bitstream/20.500.14242/214884/1/ilovepdf_merged-8.pdf" target="_blank" rel="noopener noreferrer" className="text-[#18C5FF] hover:text-[#60a5fa] underline font-semibold">Avanzo, 2025</a>).
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline" className="bg-transparent border-[#555B7C] text-white hover:bg-[#555B7C]/20 rounded-md px-8 py-6 text-base font-semibold">
              <Link to={createPageUrl('Projects')}>
                View Our Projects &amp; Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {methodologies.map((method) => (
            <div key={method.name} className="bg-[#0a1628]/80 backdrop-blur-sm rounded-xl p-6 hover:bg-[#0a1628] transition-colors border border-[#18C5FF]/20">
              <div className={`flex items-center justify-center h-12 w-12 rounded-md ${method.color} text-white mb-4`}>
                <method.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F7FF] mb-3">{method.name}</h3>
              <p className="text-base text-[#C3C8E5] leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-b from-[#0a0f1e] to-[#050713] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#F5F7FF] sm:text-4xl">
            <span className="block">Ready to Launch Your DAO?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-[#C3C8E5]">
            From concept to compliant deployment, we provide end-to-end support for your decentralized organization. Let's build the future together.
          </p>
          <Button 
            onClick={() => setConsultationModalOpen(true)}
            size="lg" 
            className="mt-8 w-full sm:w-auto bg-[#2563FF] hover:bg-[#1d4ed8] text-white"
          >
            Start Your DAO Journey
          </Button>
        </div>
      </div>
      <ConsultationFormModal 
        open={consultationModalOpen} 
        onOpenChange={setConsultationModalOpen}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ComprehensiveSupport />
      <ConsultingUnits />
      <OurMethodology />
      <CallToAction />
    </div>
  );
}
