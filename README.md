Joint development with @DenisBardashevich.
The online store represents a multi-page structure, which is navigated using React Router.
The project has rich functionality:
- sliders made using the Swipper library;
- a basket with our purchases;
- sorting goods by price;
- modal windows;
- sending an application via telegram.
The main highlight of the project is sending applications via telegram (you can also send them to any other services). This was implemented by creating a server on node.js using the Express framework. The logic is based on receiving data about the user to the server and generating a message for the telegram bot, which in turn sends a message to the group. This technology is implemented using the Telegram API (by chat ID and telegram bot token).
The application is a very convenient option for doing business, in which the manager receives data about the user and his preferences. Based on this data, you can easily create an order, maintain feedback with the user and promptly close applications.
The user no longer needs to contact the seller directly. The user states their preferences by filling out the form.
Thus, the web application facilitates the purchase of goods by the user, and also facilitates the way the seller forms an order.

Enjoy watching :)