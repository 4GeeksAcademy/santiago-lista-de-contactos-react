import rigoImage from "../../img/rigo-baby.jpg";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{name:"Santiago", address:"Colombia", phone:"123-456-789", email:"example@gmail.com", img:rigoImage},
				{name:"Santiago", address:"Colombia", phone:"123-456-789", email:"example@gmail.com", img:rigoImage},
				{name:"Santiago", address:"Colombia", phone:"123-456-789", email:"example@gmail.com", img:rigoImage},
				{name:"Santiago", address:"Colombia", phone:"123-456-789", email:"example@gmail.com", img:rigoImage},
				{name:"Santiago", address:"Colombia", phone:"123-456-789", email:"example@gmail.com", img:rigoImage},
			]
		},
		actions: {
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
			}
		}
	};
};

export default getState;
