# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where the `useEffect` hook causes an infinite loop.  The bug arises from an incorrect dependency array in the `useEffect` hook causing the function to re-render and update the state infinitely. The solution shows how to fix the issue.