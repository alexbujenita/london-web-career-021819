class Project
    @@all = []

    attr_accessor :goal_amount, :name, :creator

    def initialize(name, creator, goal_amount)
        @name = name
        @creator = creator
        @goal_amount = goal_amount
        @@all << self
    end

    def self.all
        @@all
    end

    def pledges
        Pledge.all.select {|pledge| pledge.project == self }
    end

    def self.no_pledges
        Project.all - Pledge.all.map {|pledge| pledge.project }.uniq
    end

    def goal_met?
        self.pledges.sum {|pledge| pledge.amount } > self.goal_amount
    end

    def backer_count
        self.pledges.count
    end

    def self.above_goal
        Project.all.select {|project| project.goal_met? }
    end

    def self.most_backers
        result = []
        prev_count = 0

        Project.all.each do |project|
            if project.backer_count > prev_count
                result.clear
                result << project
                prev_count = project.backer_count
            elsif project.backer_count == prev_count
                result << project
            end
        end
    
        return result
        # Project.all.max_by {|project| project.backer_count }
    end
end