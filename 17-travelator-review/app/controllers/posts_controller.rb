class PostsController < ApplicationController

    def show
        @post = Post.find_by_id(params[:id])
    end

    def new
        @post = Post.new()
    end

    def create
        @post = Post.new(post_params)
        
        if @post.valid?
            @post.save()
            redirect_to @post
        else
            render :new
        end
    end

    def like
        @post = Post.find_by_id(params[:id])
        @post.likes += 1
        @post.save()
        redirect_to @post
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :blogger_id, :destination_id)
    end
end
