# User#initialize which takes a username
# User#username reader method
# User#tweets that returns an array of Tweet instances
# User#post_tweet that takes a message, creates a new tweet, and adds it to the user's tweet collection

class User

  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    # TODO: create tweet instance
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end

  def tweet_messages
    tweets.map { |tweet| tweet.message }
  end

end
