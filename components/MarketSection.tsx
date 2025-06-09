'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const MarketSection = () => {
  const marketSizeData = [
    { year: '2023', size: 120 },
    { year: '2024', size: 200 },
    { year: '2025', size: 350 },
    { year: '2026', size: 580 },
    { year: '2027', size: 900 },
    { year: '2028', size: 1300 },
  ];

  const marketShareData = [
    { name: 'M', value: 15 },
    { name: '竞争对手A', value: 25 },
    { name: '竞争对手B', value: 20 },
    { name: '竞争对手C', value: 18 },
    { name: '其他', value: 22 },
  ];

  return (
    <section id="market" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">市场分析</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            AI Agent市场正处于爆发前夜，未来5年将迎来指数级增长，M已做好充分准备抢占先机
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 市场规模 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-6">市场规模</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                根据权威机构预测，全球AI Agent市场规模将从2023年的120亿美元增长至2028年的1300亿美元，年复合增长率达到61%。中国市场增速更快，预计将从2023年的30亿美元增长至2028年的400亿美元，年复合增长率达到68%。
              </p>
              <p className="text-gray-300">
                AI Agent作为大模型时代的核心应用形态，将重塑人机交互方式，成为继移动互联网后的下一个重大技术浪潮。
              </p>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={marketSizeData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorSize" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" stroke="#E5E7EB" />
                  <YAxis stroke="#E5E7EB" />
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3B82F6', borderRadius: '0.375rem' }}
                    labelStyle={{ color: '#F9FAFB' }}
                    itemStyle={{ color: '#F9FAFB' }}
                    formatter={(value) => [`${value}亿美元`]}
                  />
                  <Area type="monotone" dataKey="size" stroke="#3B82F6" fillOpacity={1} fill="url(#colorSize)" name="市场规模" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center text-gray-400 text-sm mt-2">全球AI Agent市场规模预测（单位：亿美元）</div>
          </motion.div>

          {/* 竞争格局 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-500 mb-6">竞争格局</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                当前AI Agent市场竞争格局尚未完全形成，国际巨头和创新创业公司并存。国际市场以OpenAI、Anthropic等为代表，国内市场则以M为代表的创新企业正在快速崛起。
              </p>
              <p className="text-gray-300">
                M凭借自研大模型和Agent技术栈，在中文理解、本地化场景和企业服务方面具有显著优势，已成为国内市场份额前三的AI Agent提供商。
              </p>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={marketShareData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#E5E7EB" />
                  <YAxis stroke="#E5E7EB" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #8B5CF6', borderRadius: '0.375rem' }}
                    labelStyle={{ color: '#F9FAFB' }}
                    itemStyle={{ color: '#F9FAFB' }}
                    formatter={(value) => [`${value}%`]}
                  />
                  <Bar dataKey="value" name="市场份额" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center text-gray-400 text-sm mt-2">国内AI Agent市场份额分布（单位：%）</div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h4 className="font-semibold text-blue-500 mb-4">市场驱动因素</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>大模型技术突破，AI能力显著提升</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>企业数字化转型加速，对AI助手需求增长</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>个人生产力提升需求旺盛</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>计算成本持续下降，AI应用门槛降低</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h4 className="font-semibold text-purple-500 mb-4">用户需求</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>企业用户：提升效率、降低成本、增强决策</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>个人用户：提升生产力、辅助学习、创意创作</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>垂直行业：定制化解决方案，深度集成业务流程</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>开发者：API接口，构建创新应用</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h4 className="font-semibold text-blue-500 mb-4">M的市场优势</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>中文场景理解能力领先，本地化优势明显</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>自研大模型和Agent技术栈，技术壁垒高</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>ToB+ToC双轨并行，商业模式多元化</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>顶尖团队，执行力强，产品迭代速度快</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;
