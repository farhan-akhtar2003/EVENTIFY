1> here components have two folder:
shared: made by us
ui: components taken/imported from shadecn nextjs

2> copy clerk enviroment keys ie secret key for authentication and paste it to .env.local and see docs in clerk to get all needed steps for further process
and also install clerk in application if not ,and necessary for clerk process add middleware.ts finally from docs...
also add sign in sign up files and routes in (auth) and keys too in .env.local for removing some atrandom routes in login or logout page

3> add webhook to connect ur authentication with databases ie storing it in db...
webhooks helps us to sync our backend data as soon as with our clerk data..  
see webhooks in dashboard in clerk press add endpoints
ALSO install npm install svix

4> push to github before deployment in vercel
==> first create new reprository in github

1. git init
1. git add .
1. git commit -m "first commit"
1. git branch -M main
1. git remote add origin https://github.com/farhan-akhtar2003/EVENTIFY.git
1. git push -u origin master ; ; if u made it yourself wholely
1. git push -u origin main ;; if u have taken clone from other sites..

// if error comes while pushing

1. git remote -v
2. git remote set-url origin https://github.com/farhan-akhtar2003/EVENTIFY.git

5> after pushing now deploy it in vercel to get domain id add ur environment variable too.

1. now go to webhook in clerk add endpoint then add your vercel url with concatenating with
1. http:url/api/webhook/clerk
1. see the video then copy your webhook secret key in .env.local and redeploy it in vercel again with adding new env variable to vercel and get new vercel redeploy url.
1. remove all user from clerk then signup again u will see that in mongodb atlas you got \_id objectid which is same in profile view in clerk profile view means now both your user and database and clerk is successfully connected.

6> you need uploadthing to successfully upload pics images so visit uploadthing site...

1. install uploadthing npm install uploadthing @uploadthing/react
1. setup env variables for uploadthing from api keys in website

7> see your output of submission of forms in console.log to understand any error if occurs

8>   // DO NOT FORGOT TO ADD USERID TO METADATA (see it in profile view in clerk) FOR SESSION CLAIMS FOR CLERK ACCOUNT see clerk docs 
1. do customize your session token JWT tokens in clerk dashboard visit clerk website.
1. its a necessary step to complete form submission for a userid.
1. write this in clerk customize session token ::>
1. {
	"userId": "{{user.public_metadata.userId}}"
}

9>  // YOU HAVE TO CHANGE NEXT.CONFIG.JS BCZ NEXT JS NOT ALLOWS IMAGES TO BE RENDERED FROM UNKNOWN SOURDE LIKE DB SO PASTE IT ..
 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
    ]
  }
}
module.exports = nextConfig

10> install stripe js npm install @stripe/stripe-js ||npm install --save stripe @stripe/stripe-js next && npm install stripe
add stripe webhook keys to .env.local
maintain && add webhook in stripe so that you can store order or purchsed events in databases visit stripe website to complete stripe webvhook then u need to repush to github && then redeploy in vercel again
select events checkout.session.completed in stripe 
run stripe in testing mode only during development