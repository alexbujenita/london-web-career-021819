class BoatingTest
    attr_reader :student, :name
    attr_accessor :status

    @@all = []
    def initialize(student, name, instructor, status="not complete")
        @student = student
        @instructor = instructor
        @name = name
        @status = status

        @@all << self
    end

    def self.all
        @@all
    end
end
