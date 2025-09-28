//short underline design for every nav pages


function SectionTitle({ children }) {
  return (
    <div className="text-center mb-7">
      <h2 className="text-3xl font-bold relative inline-block">
        {children}
        <div className="block w-20 h-0.5 bg-black mx-auto mt-7"></div>
      </h2>
    </div>
  );
}

export default SectionTitle;
