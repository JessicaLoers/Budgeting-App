const Background = ({ children }: any) => {
  return (
    <div className="bg-white dark:bg-slate-700 transition-all h-min p-8">
      {children}
    </div>
  );
};

export default Background;
