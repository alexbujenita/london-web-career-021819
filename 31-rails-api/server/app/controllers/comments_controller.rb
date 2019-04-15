class CommentsController < ApplicationController
  def create
    # puts params
    comment = Comment.new(content: params[:content], image_id: params[:image_id])
    if comment.save
      render json: comment
    else
      render json: { error: "Unable to create comment." }, status: 400
    end
  end

end
