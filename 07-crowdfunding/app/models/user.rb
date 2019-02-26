class User
    @@all = []

    attr_accessor :name

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def create_project(name, goal_amount)
        Project.new(name, self, goal_amount)
    end

    def back_project(project, amount)
        Pledge.new(self, project, amount)
    end

    def self.highest_pledge
        Pledge.all.max_by{|pledge| pledge.amount }.backer
    end

    def pledges
        Pledge.all.select {|pledge| pledge.backer == self}
    end

    def self.multi_pledger
        User.all.select {|user| user.pledges.size > 1}
    end

    def self.project_creator
        Project.all.map {|project| project.creator }.uniq
    end
end