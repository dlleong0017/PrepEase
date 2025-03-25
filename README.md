PrepEase

steps for beginning backend
    -installation(in terminal)
        -installing node.js
            ```
            wingnet install Schnix.fnm

            fnm install 22
            ```

        -installing express, ejs, nodemon
            ```
            npm i express
            npm i --save-dev nodemon
            npm i ejs
            ```
    
    -running current files
        ```
        npm run start
        ```

        type "localhost:3000" in browser

            the default page should be "Welcome to PrepEase"

            I added a basic username and password input with no connection
                -to access this type in the URL "localhost:3000/user/reg"
                -if you type in something then in your terminal the username should pop up