class OutingsController < ApplicationController
  before_action :set_outing, only: [:show, :update, :destroy]

  # GET /outings
  def index
    @outings = Outing.all

    render json: @outings
  end

  # GET /outings/1
  def show
    render json: @outing
  end

  # POST /outings
  def create
    @outing = Outing.new(outing_params)

    if @outing.save
      render json: @outing, status: :created, location: @outing
    else
      render json: @outing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /outings/1
  def update
    if @outing.update(outing_params)
      render json: @outing
    else
      render json: @outing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /outings/1
  def destroy
    @outing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_outing
      @outing = Outing.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def outing_params
      params.require(:outing).permit(:profile_id, :event_id)
    end
end
