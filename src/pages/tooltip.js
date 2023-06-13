import Tooltip from "@/components/Tooltip";

const MyComponent = () => {
  return (
    <div>
      <h1>My Component</h1>
      <Tooltip text="This is a tooltip" position="right">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default MyComponent;
