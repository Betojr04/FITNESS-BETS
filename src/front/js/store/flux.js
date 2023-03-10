const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      createUser: async (username, password, email) => {
        try {
          const rep = await fetch(process.env.BACKEND_URL + "/api/createuser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: username,
              password: password,
              email: email,
            }),
          });
          if (resp.ok) {
            const data = await resp.json();
            return data;
          } else if (resp.status === 400) {
            // handle validation errors
            const errorData = await resp.json();
            throw new Error(errorData.message);
          } else {
            // handle other error cases
            throw new Error("Something went wrong, please try again later.");
          }
        } catch (error) {
          // handle any errors here
          console.log("Error creating user", error);
          throw error;
        }
      },
    },

    getMessage: async () => {
      try {
        // fetching data from the backend
        const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
        const data = await resp.json();
        setStore({ message: data.message });
        // don't forget to return something, that is how the async resolves
        return data;
      } catch (error) {
        console.log("Error loading message from backend", error);
      }
    },
    changeColor: (index, color) => {
      //get the store
      const store = getStore();

      //we have to loop the entire demo array to look for the respective index
      //and change its color
      const demo = store.demo.map((elm, i) => {
        if (i === index) elm.background = color;
        return elm;
      });

      //reset the global store
      setStore({ demo: demo });
    },
  };
};

export default getState;
