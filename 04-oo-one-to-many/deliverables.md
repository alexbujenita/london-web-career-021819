# Deliverables

## User

* Create a User class. The class should have these methods:
  * `User#initialize` which takes a username
  * `User#username` reader method
  * `User#tweets` that returns an array of Tweet instances
  * `User#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

## Tweet

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
