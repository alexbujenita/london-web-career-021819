class Pledge
    @@all = []

    attr_accessor :backer, :project, :amount

    def initialize(backer, project, amount)
        @backer = backer
        @project = project
        @amount = amount
        @@all << self
    end

    def self.all
        @@all
    end
end