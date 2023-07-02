# Exercise :cartwheeling: useEffect 

### Cat Fact App

fetch the data from the [Cat Fact Api](https://catfact.ninja/fact)  

**:grey_exclamation: Requirements**

- split you app into components (`<Loading/>, <CatFact/>`)
- use conditional rendering to switch between your components (`<Loading/>, <CatFact/>`) depending on the loading state
- fetch the first cat fact after the app has loaded with the help of `useEffect`
- fetch the next cat fact after the user has clicked the button to get a new cat fact


**:eye_speech_bubble: hint**

- to simulate the loading time, you could use `setTimeout()`
- use `useCallback` for function dependencies in `useEffect` if you want to extract all of your fetch logic into its own function, to reuse the function whenever you want. [React docs useCallback](https://react.dev/reference/react/useCallback)  



![](./src/assets/cat-app.gif)

---

```javascript
const MyComponent = props => {
    const innerFunction = () => {
        // do something!
    };
 
    useEffect(() => {
        innerFunction();
        // The effect calls innerFunction, hence it should declare it as a dependency
        // Otherwise, if something about innerFunction changes (e.g. the data it uses), the effect would run the outdated version of innerFunction
    }, [innerFunction]);
};
```
[Why is the above code problematic?](https://infinitypaul.medium.com/reactjs-useeffect-usecallback-simplified-91e69fb0e7a3) 

---

