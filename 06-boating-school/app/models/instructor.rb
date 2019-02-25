class Instructor

    @@all = []
    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all 
        @@all
    end

    def pass_or_fail_student(student, name, status)
        found_test = BoatingTest.all.find{|test| test.name == name && test.student == student}
        if found_test
            found_test.status = status
        else
            found_test = BoatingTest.new(student, name, self, status)
        end
        found_test
    end
end
