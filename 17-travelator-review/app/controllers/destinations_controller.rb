class DestinationsController < ApplicationController

    def show
        @destination = Destination.find_by_id(params[:id])
    end
end
