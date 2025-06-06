const base = {
  users: [],

  getUsers() {
    return this.users;
  },
  
  addUser(newUser) {
    this.users.push(newUser);
  }
  
};

const loginForm = document.querySelector(".login-form");

const fooForm = loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const inEmail = form.elements.email.value.trim();
    const inPassword = form.elements.password.value.trim();
  
    if (inEmail === "" || inPassword === "") {
        return alert('All form fields must be filled in');
    }
  base.addUser({ email: inEmail, password: inPassword });
  
  console.table(base.getUsers());
      
  form.reset();

});


