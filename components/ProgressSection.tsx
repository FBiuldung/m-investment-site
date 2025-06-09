'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ProgressSection = () => {
  const userGrowthData = [
    { month: '2023-07', users: 5 },
    { month: '2023-08', users: 15 },
    { month: '2023-09', users: 30 },
    { month: '2023-10', users: 50 },
    { month: '2023-11', users: 80 },
    { month: '2023-12', users: 120 },
    { month: '2024-01', users: 180 },
    { month: '2024-02', users: 250 },
    { month: '2024-03', users: 350 },
    { month: '2024-04', users: 500 },
    { month: '2024-05', users: 700 },
    { month: '2024-06', users: 1000 },
  ];

  const revenueData = [
    { month: '2023-10', revenue: 50 },
    { month: '2023-11', revenue: 120 },
    { month: '2023-12', revenue: 200 },
    { month: '2024-01', revenue: 350 },
    { month: '2024-02', revenue: 500 },
    { month: '2024-03', revenue: 800 },
    { month: '2024-04', revenue: 1200 },
    { month: '2024-05', revenue: 1800 },
    { month: '2024-06', revenue: 2500 },
  ];

  const revenueSourceData = [
    { name: '企业客户', value: 60 },
    { name: '个人订阅', value: 30 },
    { name: 'API服务', value: 10 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899'];

  return (
    <section id="progress" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">商业进展</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            M自成立以来实现了用户规模和收入的快速增长，商业化能力突出
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 用户增长 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-6">用户增长</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                M自2023年7月上线以来，用户规模实现了指数级增长。截至2024年6月，月活跃用户已突破150万，其中付费用户超过25万，付费转化率达到16.7%，远高于行业平均水平。
              </p>
              <p className="text-gray-300">
                用户增长主要来源于产品口碑传播和内容营销，获客成本持续下降，用户留存率稳定在行业领先水平。
              </p>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={userGrowthData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#E5E7EB" />
                  <YAxis stroke="#E5E7EB" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3B82F6', borderRadius: '0.375rem' }}
                    labelStyle={{ color: '#F9FAFB' }}
                    itemStyle={{ color: '#F9FAFB' }}
                    formatter={(value) => [`${value}万`]}
                  />
                  <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="月活用户" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center text-gray-400 text-sm mt-2">月活跃用户增长趋势（单位：万）</div>
          </motion.div>

          {/* 收入情况 */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-500 mb-6">收入情况</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                M于2023年10月开始商业化，收入实现了连续9个月环比增长，增速保持在50%以上。2024年第二季度季度收入突破2500万人民币，同比增长超过200%。
              </p>
              <p className="text-gray-300">
                收入主要来源于企业客户（60%）、个人订阅（30%）和API服务（10%），多元化的收入结构为公司提供了稳定的现金流。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#E5E7EB" />
                    <YAxis stroke="#E5E7EB" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #8B5CF6', borderRadius: '0.375rem' }}
                      labelStyle={{ color: '#F9FAFB' }}
                      itemStyle={{ color: '#F9FAFB' }}
                      formatter={(value) => [`${value}万人民币`]}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="月收入" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="text-center text-gray-400 text-sm mt-2">月收入增长趋势（单位：万人民币）</div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {revenueSourceData.map((entry, index) => (
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
                <div className="text-center text-gray-400 text-sm mt-2">收入来源分布</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* 企业客户 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-500 mb-4">企业客户</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                截至2024年6月，M已签约企业客户超过50家，覆盖金融、医疗、教育、制造等多个行业，包括多家世界500强企业和行业龙头。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-blue-500 mb-2">金融行业</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 为头部银行提供智能客服和风控助手</li>
                  <li>• 为证券公司提供投研助手和交易分析</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-purple-500 mb-2">医疗行业</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 为三甲医院提供医疗知识助手</li>
                  <li>• 为制药企业提供研发辅助工具</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-blue-500 mb-2">教育行业</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 为在线教育平台提供AI辅导助手</li>
                  <li>• 为高校提供科研助手和教学工具</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-purple-500 mb-2">制造行业</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 为汽车制造商提供设计和测试助手</li>
                  <li>• 为电子制造商提供供应链优化工具</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 个人用户 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-500 mb-4">个人用户</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                M的个人用户主要包括知识工作者、创意人员、学生和开发者等群体，用户满意度达到95%，远高于行业平均水平。
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-blue-500 mb-2">订阅服务</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-200 mb-1">基础版</h5>
                    <p className="text-gray-400 text-xs">¥39/月，10万用户</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-200 mb-1">专业版</h5>
                    <p className="text-gray-400 text-xs">¥99/月，15万用户</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-purple-500 mb-2">用户留存</h4>
                <div className="flex items-center">
                  <div className="w-32 text-gray-300 text-sm">次日留存</div>
                  <div className="flex-1 bg-gray-800 rounded-full h-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full text-xs flex items-center justify-center text-white" style={{ width: '85%' }}>
                      85%
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-32 text-gray-300 text-sm">7日留存</div>
                  <div className="flex-1 bg-gray-800 rounded-full h-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full text-xs flex items-center justify-center text-white" style={{ width: '70%' }}>
                      70%
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-32 text-gray-300 text-sm">30日留存</div>
                  <div className="flex-1 bg-gray-800 rounded-full h-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full text-xs flex items-center justify-center text-white" style={{ width: '60%' }}>
                      60%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressSection;
