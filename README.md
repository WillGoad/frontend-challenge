This is Will Goad's attempt at the Significa Front End Challenge as described at https://github.com/Significa/frontend-challenge

Contact Details:
willgoad@btinternet.com

Here I document my planning and execution of the challenge.

Analysis Section

Succes Criteria:
1. Contains 2 Pages:
Home:
    -Empty (Initial) State, Includes a search bar, logo and splash image.
    -Loading (Typing) State (Load potential Search Results while typing), Makes API call, Shows CSS Loading Wheel, Returns results after every letter
    -Movie not Found, Shows a message saying movie not found and the last results that returned successfully

Movie Details:
    -Loading State, Makes Request to API for more details on selected film, shows CSS Loading Wheel until data returned
    -Movie Not Found, Sends user back to search page with error message.

2. Succesfully Communicate with OMDB API
3. Write a good README with basic information (e.g.: how to start the project and how to build it);
4. Make Responsive
5. Persistent Liking changeable and shown in both search results and movie details page
6. Use BEM & ITCSS in CSS
7. Include Loading States so the user is being communicated to at all times.
8. 100% Test Code Coverage through Automated Unit Tests and manual tests where automated testing is not possible.
9. Code has good: semantics, structure, legibility, size and elegance

Changes to Success Criteria after Initial manual API Tests

I have tested the API so to make sure it works in the ways needed to fulfill my success criteria and it fails at only one point: the API does not allow
searches of 2 characters or less and so I can't start search until the third letter. Additionally, my API key only grants me 1000 calls a day so searching 
would risk hitting that limit too quickly. Therefore I have decided to refresh the results after every new word is typed.

Design

1. Component Tree / Component Structure

We'll have an app component which contains a layout component which contains a Logo componet and the {Props.Children} 
into which we will dynamically pass individual pages. The two pages are Movie Search and Movie Details.

Movie Search

Within Movie Search there will be 3 sub components: Search Bar, Splash Image and Results Display. Finally, the results 
display will contain individual film components which will essentially be a css styled html div containing the poster, 
year made and title. The film component will also contain a Like component.


2. Application State (Data)
The state will be managed by the stateful Movie Search Component. The state will contain:

<ul>
    <li>searchTerm: ie "What"</li>
    <li>shouldSearch: ie false</li>
    <li>results: Includes Title, Year, Poster and isLiked</li>
</ul>

Whether a film is liked will be stored persistently on firebase and before being display my app will check whether it
is liked or not and update it accordingly.

Extra:

1. What is the BEM methodology in CSS?

2. What is the ITCSS metholody in CSS?

3. What are Events in JavaScript?

4. What are Promises in JavaScript?

5. What is Reactivity in JavaScript?


