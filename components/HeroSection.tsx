'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onLearnMoreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">M - 引领</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                AI Agent新时代
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              北京HDXY科技有限公司打造的新一代人工智能助手，为企业和个人用户提供超越想象的智能体验
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLearnMoreClick}
              >
                了解更多
              </motion.button>
              <motion.button
                className="px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-md hover:bg-blue-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                投资亮点
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h3 className="text-blue-500 font-bold mb-2">技术领先</h3>
                      <p className="text-sm text-gray-300">自研1.5万亿参数HDXY-LLM大模型，性能超越GPT-4</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h3 className="text-purple-500 font-bold mb-2">产品卓越</h3>
                      <p className="text-sm text-gray-300">M Assistant具备强大工具使用能力，支持复杂任务规划与执行</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h3 className="text-blue-500 font-bold mb-2">商业双轨</h3>
                      <p className="text-sm text-gray-300">ToB+ToC并行策略，多元化收入结构确保可持续增长</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h3 className="text-purple-500 font-bold mb-2">顶尖团队</h3>
                      <p className="text-sm text-gray-300">由前Google AI首席科学家肖H领衔，90%团队成员拥有博士学位</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">公司简介</h2>
            <p className="text-gray-300 mb-6">
              北京HDXY科技有限公司成立于2023年7月，是一家专注于人工智能Agent技术的创新企业。公司致力于打造具有自主思考、规划和执行能力的AI助手，为用户提供全方位的智能服务。短短一年内，M已成为国内AI Agent领域的领军企业，用户规模和收入增长均处于行业领先水平。
            </p>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">投资亮点</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-blue-500 text-2xl font-bold mb-2">150万+</div>
                <div className="text-gray-300">月活用户</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-purple-500 text-2xl font-bold mb-2">16.7%</div>
                <div className="text-gray-300">付费转化率</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-blue-500 text-2xl font-bold mb-2">200%</div>
                <div className="text-gray-300">收入环比增长</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-purple-500 text-2xl font-bold mb-2">5亿美元</div>
                <div className="text-gray-300">A轮估值</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
