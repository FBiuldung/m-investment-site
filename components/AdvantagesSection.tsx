'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">核心竞争力</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            M凭借自研技术、产品创新和商业模式优势，在AI Agent领域建立了坚实的竞争壁垒
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 技术优势 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-500">技术优势</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-100 mb-2">HDXY-LLM大模型</h4>
              <p className="text-gray-300 mb-4">
                自研1.5万亿参数规模大模型，采用创新的混合专家架构，在计算效率和推理性能上实现突破。在多项权威基准测试中表现均优于GPT-4，特别是在中文理解、逻辑推理和创意生成方面具有显著优势。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-100 mb-2">AI Agent技术栈</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>规划系统：能够将复杂任务分解为可执行步骤，并动态调整执行路径</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>记忆系统：支持长期记忆和上下文理解，为用户提供连贯一致的交互体验</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>工具使用：能够调用100+种工具和API，实现网页浏览、代码执行、数据分析等功能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>多模态能力：支持文本、图像、视频等多种输入输出形式，实现跨模态理解和生成</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 产品优势 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-500">产品优势</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-100 mb-2">M Assistant</h4>
              <p className="text-gray-300 mb-4">
                M Assistant是公司面向用户的旗舰产品，具备强大的工具使用能力，能够自主调用浏览器、编程环境、办公软件等工具完成复杂任务。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-100 mb-2">核心特点</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>强大的工具使用能力：能够自主调用各类工具完成复杂任务</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>多步骤任务规划：能够理解用户长期目标，制定执行计划并逐步完成</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>个性化体验：通过记忆系统记住用户偏好和历史交互，提供定制化服务</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>多模态交互：支持文字、图像、语音等多种交互方式，满足不同场景需求</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 商业模式 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-500">商业模式</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-100 mb-2">ToB+ToC双轨并行</h4>
              <p className="text-gray-300 mb-4">
                M采用ToB+ToC双轨并行的商业模式，多元化的收入结构降低了单一业务风险，为公司提供了稳定的现金流和可持续的增长动力。
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="font-medium text-blue-500 mb-2">ToB业务</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 企业AI助手定制：为金融、医疗、教育等行业客户提供定制化AI助手解决方案</li>
                  <li>• API服务：提供模型API和Agent API，支持企业将AI能力集成到自有产品中</li>
                  <li>• 行业解决方案：针对特定行业痛点，开发垂直领域解决方案</li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="font-medium text-purple-500 mb-2">ToC业务</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 订阅服务：提供基础版和专业版订阅计划，满足不同层次用户需求</li>
                  <li>• 增值服务：提供定制化AI助手、专属知识库等增值服务</li>
                  <li>• 应用市场：构建开发者生态，分享第三方开发的Agent应用收益</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
