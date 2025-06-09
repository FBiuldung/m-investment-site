'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const InvestmentSection = () => {
  const fundingData = [
    { round: '天使轮', date: '2023-08', amount: 500, valuation: 5000 },
    { round: 'Pre-A轮', date: '2023-12', amount: 2000, valuation: 15000 },
    { round: 'A轮', date: '2024-06', amount: 5000, valuation: 50000 },
  ];
  
  const fundUsageData = [
    { name: '技术研发', value: 40 },
    { name: '市场拓展', value: 30 },
    { name: '基础设施', value: 20 },
    { name: '运营资金', value: 10 },
  ];
  
  const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'];

  return (
    <section id="investment" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">融资信息</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            M自成立以来已完成三轮融资，估值增长迅速
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 历史融资 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-6">历史融资</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                M自成立以来，已完成三轮融资，估值从天使轮的5000万美元增长至A轮的5亿美元，增长了10倍。
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-8 pb-8 border-l-2 border-blue-500/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-2">
                  <span className="text-blue-500 font-semibold">天使轮（2023年8月）</span>
                </div>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>• 融资金额：500万美元</p>
                  <p>• 估值：5000万美元</p>
                  <p>• 投资方：顶级VC机构A和天使投资人B</p>
                  <p>• 资金用途：团队组建和产品研发</p>
                </div>
              </div>
              
              <div className="relative pl-8 pb-8 border-l-2 border-purple-500/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="mb-2">
                  <span className="text-purple-500 font-semibold">Pre-A轮（2023年12月）</span>
                </div>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>• 融资金额：2000万美元</p>
                  <p>• 估值：1.5亿美元（较上轮增长200%）</p>
                  <p>• 投资方：知名VC机构C领投，机构A和B跟投</p>
                  <p>• 资金用途：产品迭代和市场拓展</p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-semibold">A轮（2024年6月）</span>
                </div>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>• 融资金额：5000万美元</p>
                  <p>• 估值：5亿美元（较上轮增长233%）</p>
                  <p>• 投资方：全球顶级VC机构D领投，机构C和战略投资者E跟投</p>
                  <p>• 股权释放比例：10%</p>
                </div>
              </div>
            </div>
            
            <div className="h-64 w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={fundingData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValuation" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="round" stroke="#E5E7EB" />
                  <YAxis stroke="#E5E7EB" />
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3B82F6', borderRadius: '0.375rem' }}
                    labelStyle={{ color: '#F9FAFB' }}
                    itemStyle={{ color: '#F9FAFB' }}
                    formatter={(value) => [`${value}万美元`]}
                  />
                  <Area type="monotone" dataKey="valuation" stroke="#3B82F6" fillOpacity={1} fill="url(#colorValuation)" name="估值" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center text-gray-400 text-sm mt-2">估值增长趋势（单位：万美元）</div>
          </motion.div>

          {/* 本轮融资 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-500 mb-6">本轮融资</h3>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-200 mb-4">A轮融资详情</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-purple-500 text-2xl font-bold mb-1">5000万美元</div>
                  <div className="text-gray-300 text-sm">融资金额</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-blue-500 text-2xl font-bold mb-1">5亿美元</div>
                  <div className="text-gray-300 text-sm">估值</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-purple-500 text-2xl font-bold mb-1">233%</div>
                  <div className="text-gray-300 text-sm">估值增长率</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-blue-500 text-2xl font-bold mb-1">10%</div>
                  <div className="text-gray-300 text-sm">股权释放比例</div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold text-gray-200 mb-4">资金用途</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={fundUsageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {fundUsageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #8B5CF6', borderRadius: '0.375rem' }}
                        labelStyle={{ color: '#F9FAFB' }}
                        itemStyle={{ color: '#F9FAFB' }}
                        formatter={(value) => [`${value}%`]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-500 mb-2">技术研发（40%）</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 扩大研发团队规模，吸引顶尖AI人才</li>
                      <li>• 提升模型性能，扩大参数规模至10万亿</li>
                      <li>• 增强Agent能力，支持更复杂任务执行</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h5 className="font-medium text-purple-500 mb-2">市场拓展（30%）</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 扩大销售和市场团队</li>
                      <li>• 开拓国际市场，特别是北美和东南亚地区</li>
                      <li>• 加大品牌推广和用户获取投入</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-200 mb-4">投资亮点</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-500 mb-2">增长潜力</h5>
                  <p className="text-gray-300 text-sm">处于爆发期的AI Agent市场，预计5年内增长10倍以上</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-500 mb-2">技术壁垒</h5>
                  <p className="text-gray-300 text-sm">自研大模型和Agent技术栈构建了坚实的技术护城河</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-500 mb-2">商业化速度</h5>
                  <p className="text-gray-300 text-sm">从0到1000万人民币季度收入仅用9个月，商业化能力突出</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-500 mb-2">退出机会</h5>
                  <p className="text-gray-300 text-sm">明确的上市路径，预计3-5年内完成IPO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
