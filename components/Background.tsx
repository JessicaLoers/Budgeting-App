const Background = ({ children }: any) => {
  return (
    <div className="bg-white dark:bg-slate-700 transition-all h-screen pt-4">
      {children}
    </div>
  );
};

export default Background;
