'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">发展规划</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            M的发展规划清晰明确，短期专注产品打磨和市场拓展，中期实现规模化增长和盈利，长期建立全球领导地位和完整生态
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* 短期目标 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-200">1年</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-2">短期目标</h3>
                <p className="text-gray-300 mb-4">
                  在未来1年内，M将专注于产品迭代、用户增长和企业客户拓展，为中长期发展奠定坚实基础。
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-500 mb-4">产品发展</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>推出M Assistant 2.0版本，全面提升工具使用能力和多模态理解能力</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>发布垂直领域解决方案，覆盖金融、医疗、教育、制造四大核心行业</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>推出开发者平台，构建Agent应用生态</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-500 mb-4">业务增长</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>月活用户突破500万，付费用户达到100万</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>企业客户增至200家，覆盖所有Fortune 500中国企业</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>完成B轮融资，估值突破10亿美元</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 中期目标 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-200">3年</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-purple-500 mb-2">中期目标</h3>
                <p className="text-gray-300 mb-4">
                  在未来3年内，M将实现规模化增长，扩大市场份额，并开始实现盈利，为长期发展奠定基础。
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-500 mb-4">市场地位</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>成为国内AI Agent市场份额第一，用户规模突破2000万</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>国际市场实现突破，海外用户占比达30%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>在金融、医疗等垂直领域成为行业标准解决方案提供商</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-500 mb-4">财务目标</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>营收突破10亿人民币，年增长率保持在100%以上</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>实现盈亏平衡，部分业务线开始盈利</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>完成C轮和D轮融资，为IPO做准备</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 长期愿景 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-200">5年</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">长期愿景</h3>
                <p className="text-gray-300 mb-4">
                  在未来5年内，M将成为全球AI Agent领域的领导者，建立完整的AI生态系统，并实现IPO上市。
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-500 mb-4">战略定位</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>成为全球AI Agent领域领导者，与OpenAI、Google等巨头并驾齐驱</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>建立完整的AI生态系统，包括基础模型、开发平台和应用市场</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>在多个垂直领域实现深度渗透，重塑行业运作方式</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-500 mb-4">商业成就</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>完成IPO上市，成为AI领域独角兽企业</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>营收突破50亿人民币，实现全面盈利</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>用户规模突破1亿，成为全球最大的AI Agent平台之一</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
