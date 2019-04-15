class ImagesController < ApplicationController
  def show
    image = Image.find_by(id: params[:id])
    if image
      render json: image
    else
      render json: {error: "Image not found."}, status: 404
    end
  end

  def increase_likes
    image = Image.find_by(id: params[:image_id])
    if image
      image.like_count += 1
      image.save
      render json: image
    else
      render json: { error: "Image not found." }, status: 404
    end
  end
end
