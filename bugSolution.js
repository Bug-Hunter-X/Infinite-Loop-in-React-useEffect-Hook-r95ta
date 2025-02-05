```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Only executes once on mount and unmount
    let intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update count every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Empty dependency array ensures execution only once on mount

  return <div>Count: {count}</div>;
}
```