require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console
s1 = Student.new("Tom")
s2 = Student.new("Tim")

i1= Instructor.new("Nora")
i2= Instructor.new("Lora")

bt1 = BoatingTest.new(s1, "Navigating obstacles in icy conditions", i1)
bt2 = BoatingTest.new(s2, "Procedure for handling pirates", i1)
bt3 = BoatingTest.new(s2, "Navigating obstacles in dark conditions",i2, "pass")
bt4 = BoatingTest.new(s1, "Boat maintanace", i2, "fail")
bt5 = BoatingTest.new(s2, "Boat insurance rules and regulations", i2)


binding.pry
0 #leave this here to ensure binding.pry isn't the last line

