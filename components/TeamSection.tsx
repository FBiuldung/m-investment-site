'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">顶尖团队</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            M的团队融合了顶尖的AI研究能力、丰富的产品开发经验和深厚的行业洞察
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* 创始人 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-100">肖H</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">肖H</h3>
            <p className="text-blue-500 text-center text-sm mb-4">创始人兼CEO</p>
            <p className="text-gray-300 text-sm">
              肖H博士曾担任Google AI首席科学家，拥有20年AI领域研究和产品开发经验。在加入Google前，他曾在斯坦福大学担任副教授，发表过100+篇高影响力论文，被引用次数超过50,000次。肖H博士是深度学习和自然语言处理领域的权威专家，曾主导开发多个影响行业的AI系统。
            </p>
          </motion.div>

          {/* 联合创始人 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-100">季YC</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">季YC</h3>
            <p className="text-purple-500 text-center text-sm mb-4">联合创始人兼CTO</p>
            <p className="text-gray-300 text-sm">
              季YC博士曾任微软研究院高级研究员，是自然语言处理和大规模语言模型领域的专家。他在卡内基梅隆大学获得计算机科学博士学位，曾参与多个大型语言模型的研发工作。加入M前，季博士领导的团队开发的语言模型在多项国际评测中获得冠军。
            </p>
          </motion.div>

          {/* 核心团队 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-100">核心</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">核心管理团队</h3>
            <p className="text-blue-300 text-center text-sm mb-4">行业精英</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <span className="font-medium">李M - 首席产品官：</span> 前阿里巴巴产品总监，拥有10年AI产品经验</li>
              <li>• <span className="font-medium">张J - 首席运营官：</span> 前字节跳动高级运营总监，负责多款爆款产品运营</li>
              <li>• <span className="font-medium">王L - 首席商务官：</span> 前IBM大中华区副总裁，拥有丰富的企业服务销售经验</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* 团队构成 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-500 mb-4">团队构成</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-32 text-gray-300">团队规模</div>
                <div className="flex-1 bg-gray-700 rounded-full h-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ width: '70%' }}>
                    120人
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-gray-300">研发人员</div>
                <div className="flex-1 bg-gray-700 rounded-full h-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ width: '70%' }}>
                    70%
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-gray-300">博士/硕士</div>
                <div className="flex-1 bg-gray-700 rounded-full h-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ width: '90%' }}>
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 团队文化 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-500 mb-4">团队文化</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-blue-500 mb-2">追求技术极致</h4>
                <p className="text-gray-300 text-sm">不断挑战技术边界，追求卓越的产品体验</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-purple-500 mb-2">鼓励创新</h4>
                <p className="text-gray-300 text-sm">开放包容的环境，鼓励大胆尝试和创新</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-blue-500 mb-2">快速迭代</h4>
                <p className="text-gray-300 text-sm">敏捷开发流程，快速响应市场和用户需求</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-purple-500 mb-2">用户至上</h4>
                <p className="text-gray-300 text-sm">以用户体验为核心，持续优化产品和服务</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
