const users = [
    {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        city:'Paris',
        language:'English'
    },
    {
        id: 2,
        firstname:'Valeriy',
        lastname:'Appius',
        email:'valeriy.appius@example.com',
        city:'Moscow',
        language:'Russian'
    },
    {
        firstname:'Ralf',
        lastname:'Geronimo',
        email:'ralf.geronimo@example.com',
        city:'New York',
        language:'Italian'
    },
    {
        firstname:'Maria',
        lastname:'Iskandar',
        email:'maria.iskandar@example.com',
        city:'New York',
        language:'German'
    },
    {
        firstname:'Jane',
        lastname:'Doe',
        email:'jane.doe@example.com',
        city:'London',
        language:'English'
    },
    {
        firstname:'Johanna',
        lastname:'Martino',
        email:'johanna.martino@example.com',
        city:'Milan',
        language:'Spanish'
    },
];

const getUsers = (req, res) => {
    res.json(users);
  };
  
  const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
  
    const user = users.find((user) => user.id === id);
  
    if (user != null) {
      res.json(user);
    } else {
      res.status(404).send("Not Found");
    }
  };

  module.exports = {
    getUsers,
    getUserById
  }