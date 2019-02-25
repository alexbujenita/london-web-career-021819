class Student
    attr_reader :first_name
    @@all = []

    def initialize(first_name)
        @first_name = first_name
        @@all << self
    end

    def self.all
        @@all
    end

    def add_boating_test(name, instructor, status)
        BoatingTest.new(self, name, instructor, status)
    end

    def tests 
        BoatingTest.all.select{|test| test.student == self}
    end

    def self.find_student(first_name)
        @@all.find{|student| student.first_name == first_name}
    end

    def grade_percentage
        passing_tests = tests.select {|test| test.status == "pass"}.length.to_f
        all_tests = tests.length.to_f
        passing_tests / all_tests * 100
    end

end
