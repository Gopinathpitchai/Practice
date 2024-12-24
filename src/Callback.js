const Callback = () => {
    const [count, setCount] = useState(0);
  
    const incrementCount = useCallback(() => {
      setCount(count + 1);
    }, [count]);
  
    return (
      <div>
        <ChildComponent incrementCount={incrementCount} />
      </div>
    );
  };
  
  const ChildComponent = ({ incrementCount }) => {
    return <button onClick={incrementCount}>Increment Count</button>;
  };

  
  export default Callback;