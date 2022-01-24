# Cat Breedy

A single page app that provides the functionality to search for cat breeds and their pictures. 

> ###### Frontend: React, Ant Design Library
> ###### API: The Cat API

This is my second time using Ant Design library and it is getting more and more handy. 

Please check out the live demo here:

[Cat Breedy](https://cat-breedy.vercel.app/)

You will be greeted with a landing page. Click on "Explore" to start the search.


![cat_breedy_landing](https://user-images.githubusercontent.com/49362324/150684079-f23fc553-9608-4fef-b89a-1ac906237968.png)


When you landed on the search route, all 67 breeds will be fetched and paginated (9 in a page). You can click through all the pages.

Start searching for cat breeds, typing in "American" in the search box. You will expect to see the suggestions dropdown after 1 second (I think it would be better to put 500ms) as custom debounce hook is wrapped on the query.

Images are lazy loaded with Carousel component in Ant Design. React Slicker is working underneath the hood, however it would be great if Carousel component is able to show arrows for next and previous pages. 

You can sort the breeds according to ascending orders of their names, lifespan and weight. Lifespan and weight are ranges, and therefore they are sorted based on averages. 

![cat_breedy_filter](https://user-images.githubusercontent.com/49362324/150684381-1c9db1c0-68ab-447e-acf0-92b05f5e3a4f.png)
