
var firstname = prompt("firstname");
var lastname = prompt("lastname");
var email = prompt("email")
var tel = prompt("tel")
var addres = prompt("addres")
var work = prompt("work")


box.innerHTML = `
                   <h1 class="firstname">Firstname:${ firstname }</h1>
                   <h2 class="firstname">Lastname:${ lastname }</h2>

                `
box2.innerHTML =  `
                   <p class="text">
                    Email: ${email}
                   </p>

                   <p class="text">
                    Tel:${tel}
                   </p>

                   <p class="text">
                    Addres:${addres}
                   </p>

                   <p class="text">
                   Work:${work}
                   </p>
                   `