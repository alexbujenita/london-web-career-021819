class BloggersController < ApplicationController

    def show
        @blogger = Blogger.find_by_id(params[:id])
    end

    def new
        @blogger = Blogger.new()
    end

    def create
        @blogger = Blogger.new(blogger_params)
        
        if @blogger.valid?
            @blogger.save()
            redirect_to @blogger
        else
            render :new
        end
    end

    private

    def blogger_params
        params.require(:blogger).permit(:name, :bio, :age)
    end

end
