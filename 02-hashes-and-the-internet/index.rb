# Gooks - Your one-stop-Google-Book-API shop!
require "pry"
require "rest-client"
require "json"

# response = RestClient.get("https://www.reddit.com")
#
# response2 = RestClient.get("https://www.reddit.com/.json")
#
# data = JSON.parse(response2)
#

def welcome
  puts "Welcome to Gooks!"
end

def get_search_term
  puts "Enter a search term:"
  gets.chomp
end

def get_books_from_google_books(search_term)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
  data = JSON.parse(response)
  data["items"]
end

def get_book_title(book)
  book["volumeInfo"]["title"]
end

def get_book_snippet(book)
  if book["searchInfo"] && book["searchInfo"]["textSnippet"]
    book["searchInfo"]["textSnippet"]
  else
    "Not available."
  end
end

def display_book_info(book, index)
  title = get_book_title(book)
  snippet = get_book_snippet(book)
  puts "*" * 20
  puts ""
  puts "BOOK #{index + 1}"
  puts "Title: #{title}"
  puts "Snippet: #{snippet}"
  puts ""
end

def display_all_book_info(books)
  books.each_with_index { |book, index| display_book_info(book, index) }
end

def main
  # greet the user
  welcome
  # get search_term from user
  search_term = get_search_term
  # call the website with the search_term
  # parse the JSON response
  books =  get_books_from_google_books(search_term)
  # display title and snippet of each book to user
  display_all_book_info(books)
end

main

# binding.pry
#
# "some random text so pry actually works"
