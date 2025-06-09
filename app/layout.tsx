export const metadata = {
  title: '你的网站标题', 
  description: '网站描述', 
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN"> 
      <body>{children}</body>
    </html>
  );
}