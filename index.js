      var display1 = document.getElementById('display1');
      var display2 = document.getElementById('display2');

      function generate() {
        const length = 10;
        const random = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";

        for (let i = 0; i < length; i++) {
         password += random.charAt(Math.floor(Math.random() * random.length));
        }

        display1.innerHTML = password;
        
      }
