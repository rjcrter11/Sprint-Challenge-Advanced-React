- [ ] Why would you use class component over function components (removing hooks from the question)?

  If hooks weren’t a thing, classes would be necessary to mess with state, as previously, functional components couldn’t

- [ ] Name three lifecycle methods and their purposes.

  1. ComponentDidMount -invoked right after the component mounts, can be used like useEffect in function components 2. ComponentDidUpdate - invoked right after updating happens. Takes prevProps and prevState params, so you can check if that has since changed and direct the function to do something with that 3. ComponentWillUnmount - invoked immediately before a component is unmounted. Used to perform any needed cleanup, like canceling timers or network requests

* [ ] What is the purpose of a custom hook?

  To make a hook reusable for import, instead of rewriting out state that has similar functionality in tons of components

- [ ] Why is it important to test our apps?

  Testing now, even though it seems like it makes the coding take way longer, will save time in the long run, making the code less fragile, and less of a worry when it needs to be refactored or have a feature added.
  Assuming, of course, you have any idea what you're doing. I def don't...
