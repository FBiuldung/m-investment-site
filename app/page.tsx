'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DisclaimerModal from '@/components/DisclaimerModal';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TeamSection from '@/components/TeamSection';
import MarketSection from '@/components/MarketSection';
import ProgressSection from '@/components/ProgressSection';
import InvestmentSection from '@/components/InvestmentSection';
import RoadmapSection from '@/components/RoadmapSection';

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // 检查本地存储，看用户是否已经确认过声明
    const hasConfirmed = localStorage.getItem('disclaimerConfirmed');
    if (hasConfirmed) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    // 保存到本地存储，避免重复显示
    localStorage.setItem('disclaimerConfirmed', 'true');
  };

  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleLearnMoreClick = () => {
    const advantagesSection = document.getElementById('advantages');
    if (advantagesSection) {
      advantagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <DisclaimerModal isOpen={showDisclaimer} onClose={handleDisclaimerClose} />
      <Navbar onContactClick={handleContactClick} />
      
      <main>
        <HeroSection onLearnMoreClick={handleLearnMoreClick} />
        <AdvantagesSection />
        <TeamSection />
        <MarketSection />
        <ProgressSection />
        <InvestmentSection />
        <RoadmapSection />
      </main>
      
      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">M</span>
              <p className="text-gray-400 mt-2">© 2024 北京HDXY科技有限公司. 保留所有权利.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 mb-2">本网站由M制作，内容来自公开信息，仅限合格投资者查阅</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">隐私政策</a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">使用条款</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* 联系我们弹窗 */}
      <AnimatePresence>
        {showContact && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-gray-800 border border-blue-500/30 rounded-lg p-6 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  联系我们
                </h2>
              </div>
              <div className="mb-6 text-gray-200">
                <p className="mb-4">如果您对M项目感兴趣，请通过以下方式联系我们：</p>
                <div className="space-y-2">
                  <p><span className="text-blue-500">邮箱：</span> invest@hdxy-tech.com</p>
                  <p><span className="text-blue-500">电话：</span> +86 10 8888 8888</p>
                  <p><span className="text-blue-500">地址：</span> 北京市海淀区科技园区</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={() => setShowContact(false)}
                  className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
