1. here components have two folder:
        shared: made by us
        ui: components taken/imported from shadecn nextjs

2. copy clerk enviroment keys ie secret key for authentication and paste it to .env.local and see docs in clerk to get all needed steps for further process
and also install clerk in application if not ,and necessary for clerk process add middleware.ts finally from docs...
also add sign in sign up files and routes in (auth) and keys too in .env.local for removing some atrandom routes in login or logout page

3. add webhook to connect ur authentication with databases...
webhooks helps us to sync our backend data as soon as with our clerk data..  
see webhooks in dashboard in clerk press add endpoints
ALSO install npm install svix

4. push to github before deployment in vercel
==> first create new reprository in github
1. git init
1. git add .
1. git commit -m "first commit"
1. git branch -M main
1. git remote add origin https://github.com/farhan-akhtar2003/EVENTIFY.git
1. git push -u origin main