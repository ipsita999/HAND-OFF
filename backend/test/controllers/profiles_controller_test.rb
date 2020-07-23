require 'test_helper'

class ProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @profile = profiles(:one)
  end

  test "should get index" do
    get profiles_url, as: :json
    assert_response :success
  end

  test "should create profile" do
    assert_difference('Profile.count') do
      post profiles_url, params: { profile: { address: @profile.address, addressimg: @profile.addressimg, city: @profile.city, email: @profile.email, license: @profile.license, name: @profile.name, phone: @profile.phone, state: @profile.state, zipcode: @profile.zipcode } }, as: :json
    end

    assert_response 201
  end

  test "should show profile" do
    get profile_url(@profile), as: :json
    assert_response :success
  end

  test "should update profile" do
    patch profile_url(@profile), params: { profile: { address: @profile.address, addressimg: @profile.addressimg, city: @profile.city, email: @profile.email, license: @profile.license, name: @profile.name, phone: @profile.phone, state: @profile.state, zipcode: @profile.zipcode } }, as: :json
    assert_response 200
  end

  test "should destroy profile" do
    assert_difference('Profile.count', -1) do
      delete profile_url(@profile), as: :json
    end

    assert_response 204
  end
end
