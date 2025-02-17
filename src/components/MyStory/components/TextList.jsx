const TextList = ({ items }) => (
    <div className="flex flex-col justify-between text-white w-full md:w-[20rem] text-base items-center">
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
  export default TextList