import InputBox from "@/components/InputBox";

const InputField = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center border-2 p-4 bg-gray-300">
      <div className="flex flex-col border">
        <h1>INPUT BOX FORM</h1>
        <div className="p-4">
          <InputBox />
        </div>
      </div>
    </div>
  );
};

export default InputField;
