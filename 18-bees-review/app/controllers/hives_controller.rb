class HivesController < ApplicationController
    before_action :set_hive, only: [:show, :edit, :update, :delete]
    before_action :set_bees, only:[:new, :edit]

    def index
        @hives = Hive.all
    end

    def show
        @bees = @hive.bees
    end

    def new
        @hive = Hive.new
    end

    def edit
    end

    def create
        hive = Hive.create(hive_params)
        if hive.valid?
            redirect_to hive
        else
            flash[:errors] = hive.errors.full_messages
            redirect_to new_hive_path
        end
    end

    def update
        @hive.update(hive_params)
        if @hive.valid?
            redirect_to @hive
        else
            flash[:errors] = @hive.errors.full_messages
            redirect_to edit_hive_path
        end
    end

    def delete
        @hive.destroy
        redirect_to hives_path
    end

    private
      def set_hive
          @hive = Hive.find(params[:id])
      end

      def hive_params
          params.require(:hive).permit(:name, :honey_type, bee_ids: [])
      end

      def set_bees
          @bees = Bee.all
      end
end
