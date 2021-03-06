const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      vehiculos: [],
      especies: [],
      naves: [],
      planetas: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getVehiculos: () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://www.swapi.tech/api/vehicles", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ vehiculos: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      getEspecies: () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://www.swapi.tech/api/species", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ especies: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      getNaves: () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://www.swapi.tech/api/starships", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ naves: result.results });
          })
          .catch((error) => console.log("error", error));
      },
      getPlanetas: () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch("https://www.swapi.tech/api/planets", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ planetas: result.results });
          })
          .catch((error) => console.log("error", error));
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
    },
  };
};

export default getState;
