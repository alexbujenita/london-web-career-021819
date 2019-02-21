# * `Tweet#message` that returns a string
# * `Tweet#user` that returns an instance of the user class
# * `Tweet.all` that returns all the Tweets created.
# * `Tweet#username` that returns the username of the tweet's user

class Tweet

  attr_reader :message, :user
  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    @user.username
  end

  def self.find_tweet(text)
    @@all.find { |tweet| tweet.message.include?(text) }
  end

end

# Tweet.new("message", user1)
