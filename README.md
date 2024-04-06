# namaste react
# namaste react
# Uses of Parcel
==>It creates the div.

==>It creates a local server for u, it hosts ur app to the server.

==>It uses a file watching alogrithm n this alogrithm written in C++.

==>parcel is giving u a faster development expirience(faster build = run time for refreshing) n this faster. 
   refresh is cuz of caching.

==>image optimization(it loads the images in ur browser).

==>bundling(it's bundle the things up).

==>Minification of files.

==>It'll compress our files(it will remove all the white spaces in the code).

===> All these things parcel is not doing by itself it's doing with help of node libraries.
===> Consistent Hashing.
===> Code splitting.
===> Differential bundling - support older browsers.
===> HTTPs.
===> Error Handling.
===> Diagnostic(if there r any eorrors in ur code it will displays the eorrors).
===> Tree shaking = parcel will remove unused code.
===> Different build for duv and production bundels.

How do u create a production build?.

** If ur building a production build, then u have to the command npx parcel build index.html after this running 
   this command u will get error, so to solve this error, u have to remove "main": "script.js" from package.json file. cuz wn ur using 
   parcel u will give entry point as index.html so parcel conflicts with this("main": "script.js",) so u will get error.

===> wn u run npx parcel index.html it woll generates a development build of ur project n it hosts it onto/put onto dist folder.
===> whatever u see in output that code will be coming from dist file not coming from app.js or whatever.
===> wn u refresh page n save the files it will use parcel's cache n dist to update it(refreshed page n saved files) using HMR

==> wn u run npx parcel build index.html it will generates 3 files(index.html, .css, .js). these files r production ready files.
==> wt is production build = it'll compress everthing n minify everthing to these 3 files(index.html, .css, .js). now these 3 files 
conatians all the code u write n these files r production ready code app.
