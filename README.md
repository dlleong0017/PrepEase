```
# PrepEase

steps for beginning backend 
    -installation(in terminal) 
        -installing node.js
            winget install Schniz.fnm
            fnm install 22
            node -v     # Should print "v22.14.0"
            npm -v      # Should print "10.9.2"

         -installing express, ejs, nodemon
            npm i express
            npm i --save-dev nodemon
            npm i ejs

    -running current files
        npm run start

        type "localhost:3000" in browser
        the default page should be "Welcome to PrepEase"

        added a basic username and password input with no connection
        go to: localhost:3000/user/reg
```
