# Exercise :cartwheeling: useEffect 

## Cat Fact App

fetch the data from the cat fact api `'https://catfact.ninja/fact'`

**Requirements**

- split you app into components (`<Loading/>, <CatFact/>`)
- fetch the first cat fact after the app has loaded with the help of `useEffect`
- fetch the next cat fact after the user has clicked the button to get a new cat fact


**hint**

- to simulate the loading time, you could use `setTimeout()`
- use `useCallback` for function dependencies in useEffect if you want to extract all of your fetch logic into its own function, to reuse the function whenever you want.



![](./src/assets/cat-app.gif)

