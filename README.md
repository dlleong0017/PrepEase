# Disaster-Preparedness

steps for beginning backend
    -installation (in terminal)
        -installing node.js
            winget install Schniz.fnm

            fnm install 22

            # Verify the Node.js version:
            node -v # Should print "v22.14.0".

            # Verify npm version:
            npm -v # Should print "10.9.2".

        
        -installing express, ejs, nodemon
            npm i express
            npm i --save-dev nodemon
            npm i ejs
    
    -running current files
        npm run start

        type "localhost:3000" in browser

            the default page should be "Welcome to PrepEase"

            I added a basic username and password input with no connection
                -to access this type in the URL "localhost:3000/user/reg"
                -if you type in something then in your terminal the username should pop up