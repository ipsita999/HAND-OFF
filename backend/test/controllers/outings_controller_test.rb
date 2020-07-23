require 'test_helper'

class OutingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @outing = outings(:one)
  end

  test "should get index" do
    get outings_url, as: :json
    assert_response :success
  end

  test "should create outing" do
    assert_difference('Outing.count') do
      post outings_url, params: { outing: { event_id: @outing.event_id, profile_id: @outing.profile_id } }, as: :json
    end

    assert_response 201
  end

  test "should show outing" do
    get outing_url(@outing), as: :json
    assert_response :success
  end

  test "should update outing" do
    patch outing_url(@outing), params: { outing: { event_id: @outing.event_id, profile_id: @outing.profile_id } }, as: :json
    assert_response 200
  end

  test "should destroy outing" do
    assert_difference('Outing.count', -1) do
      delete outing_url(@outing), as: :json
    end

    assert_response 204
  end
end
